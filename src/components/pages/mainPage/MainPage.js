import React, { Component } from 'react';

import Papa from 'papaparse';
import { pathOr } from 'ramda';
import styles from './MainPage.module.css';
import { Map, TileLayer } from 'react-leaflet';
import { isNotNil, isNotNilAndNotEmpty } from '../../../utils/lomda';
import { getIconByCost, SELECTED_ICON } from '../../../utils/icons';
import MarkerTooltip from '../../elements/markerTooltip/MarkerTooltip';
import SiteMarker from '../../elements/siteMarker/SiteMarker';

// [latitude, longitude]
const DEFAULT_POSITION = [55.772, 37.606];
const DEFAULT_ZOOM = 14;

export default class MainPage extends Component {
    static propTypes = {};

    static defaultProps = {};

    state = {
        sites: [],
        costs: {},
        selectedId: undefined,
    };

    readFile = file => {
        const reader = new FileReader();
        if (isNotNilAndNotEmpty(file)) {
            reader.onloadend = () => {
                Papa.parse(file, {
                    complete: (results) => {
                        console.log('Finished:', results.data);
                        const clearData = results.data.filter(row => row.every(cell => isNotNilAndNotEmpty(cell)));

                        if (file.name.toLowerCase() === 'sites.csv') {
                            const sites = this.processSites(clearData);

                            this.setState({
                                sites,
                            });
                        } else if (file.name.toLowerCase() === 'costs.csv') {
                            const costs = this.processCosts(clearData);

                            this.setState({
                                costs,
                            });
                        }
                    },
                });
            };
            reader.readAsDataURL(file);
        }
    };

    processSites = ([names, ...data] = []) => {
        const idIndex = names.indexOf('site_id');
        const nameIndex = names.indexOf('site_name');
        const longitudeIndex = names.indexOf('longitude');
        const latitudeIndex = names.indexOf('latitude');

        return data.map(row => (
            {
                id: Number(row[idIndex]),
                name: row[nameIndex],
                longitude: Number(row[longitudeIndex]),
                latitude: Number(row[latitudeIndex]),
            }
        ));
    };

    processCosts = ([names, ...data] = []) => {
        const idFromIndex = names.indexOf('site_id_from');
        const idToIndex = names.indexOf('site_id_to');
        const costIndex = names.indexOf('cost');
        const waitingTimeIndex = names.indexOf('iwait');
        const tripTimeInTheCabinIndex = names.indexOf('inveht');
        const numberOfTransfersIndex = names.indexOf('xnum');
        const transferFeeIndex = names.indexOf('xpen');

        return data.reduce((result, row) => {
            return {
                ...result,
                [row[idFromIndex]]: {
                    ...result[row[idFromIndex]],
                    [row[idToIndex]]: {
                        // агрегированные затраты на перемещение
                        cost: Number(row[costIndex]),
                        // время ожидания
                        waitingTime: Number(row[waitingTimeIndex]),
                        // время в салоне
                        tripTimeInTheCabin: Number(row[tripTimeInTheCabinIndex]),
                        // число пересадок
                        numberOfTransfers: Number(row[numberOfTransfersIndex]),
                        // штраф за пересадки
                        transferFee: Number(row[transferFeeIndex]),
                    },
                },
            };
        }, {});
    };

    handleChange = event => {
        const [...files] = event.target.files;
        const sitesFile = files.find(file => file.name === 'sites.csv');
        const costsFile = files.find(file => file.name === 'costs.csv');

        this.readFile(sitesFile);
        this.readFile(costsFile);
    };

    handleMarkerClick = id => {
        if (this.state.selectedId !== id) {
            this.setState({
                selectedId: id,
            });
        }
    };

    handleMapClick = () => {
        if (isNotNil(this.state.selectedId)) {
            this.setState({
                selectedId: undefined,
            });
        }
    };

    render() {
        const { costs, sites, selectedId } = this.state;

        return (
            <>
                <div className={styles.controlWrapper}>
                    <label
                        htmlFor='files'
                        style={{
                            textDecoration: 'underline',
                            cursor: 'pointer',
                        }}
                    >
                        Загрузить файлы
                    </label>

                    <input
                        id='files'
                        type='file'
                        onChange={this.handleChange}
                        multiple
                        style={{ visibility: 'hidden' }}
                        accept='.csv'
                    />
                    {
                        isNotNilAndNotEmpty(sites) && (
                            <span>file sites uploaded</span>
                        )
                    }
                    {
                        isNotNilAndNotEmpty(costs) && (
                            <span>file costs uploaded</span>
                        )
                    }
                </div>
                <Map
                    center={DEFAULT_POSITION}
                    zoom={DEFAULT_ZOOM}
                    className={styles.mapContainer}
                    onClick={this.handleMapClick}
                >
                    <TileLayer
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    />
                    {
                        sites.map(({ id: siteId, name: siteName, latitude, longitude }) => {
                            const costsData = pathOr({}, [selectedId, siteId], costs);
                            const isSelected = (siteId === selectedId);
                            const icon = isSelected ? SELECTED_ICON : getIconByCost(costsData.cost);

                            return (
                                <SiteMarker
                                    key={siteId}
                                    id={siteId}
                                    position={[latitude, longitude]}
                                    selected={isSelected}
                                    icon={icon}
                                    handleMarkerClick={this.handleMarkerClick}
                                >
                                    <MarkerTooltip
                                        id={siteId}
                                        name={siteName}
                                        selected={isSelected}
                                        {...costsData}
                                    />
                                </SiteMarker>
                            );
                        })
                    }
                </Map>
            </>
        );
    }
}
