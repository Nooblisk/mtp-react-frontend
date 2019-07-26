import { COLORS } from '../constants/colors';
import Leaflet from 'leaflet';
import { isNil } from 'ramda';

const ICON_SIZE = [30, 45];
const ICON_COLORS = [COLORS.BLACK, COLORS.GREEN, COLORS.YELLOW, COLORS.RED, COLORS.VIOLET, COLORS.BLUE];

const icons = ICON_COLORS.reduce((result, color) => {
    return {
        ...result,
        [color]: Leaflet.icon({
            iconUrl: `/icons/map-marker-${color}.svg`,
            iconSize: ICON_SIZE,
        }),
    };
}, {});

const getIconColorByCost = cost => {
    if (isNil(cost)) {
        return COLORS.BLACK;
    } else if (cost < 5) {
        return COLORS.GREEN;
    } else if (cost >= 5 && cost < 15) {
        return COLORS.YELLOW;
    } else if (cost >= 15 && cost < 30) {
        return COLORS.RED;
    } else {
        return COLORS.VIOLET;
    }
};

export const getIconByCost = (cost) => {
    const iconColor = getIconColorByCost(cost);

    return icons[iconColor];
};

export const SELECTED_ICON = icons[COLORS.BLUE];