import L from "leaflet";
import { LeafMapIcon } from "./leafMapIconDictionary";

const useLeafMapIcon = () => {
  const iconStucture = (iconType: LeafMapIcon, color: string) =>
    '<span class="mdi ' + iconType + '" style="color : ' + color + ';font-size:36px"></span>';

  const iconSize: [number, number] = [36, 41];

  const stringToColour = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      colour += ("00" + value.toString(16)).substr(-2);
    }
    return colour;
  };

  const createIcon = (leafMapIcon: LeafMapIcon, textToColorPin: boolean, string?: string | undefined) => {
    let iconColor = "#25424c";
    if (textToColorPin && string !== undefined) {
      iconColor = stringToColour(string);
    }

    return L.divIcon({
      className: "leaf-icon-pin",
      html: iconStucture(leafMapIcon, iconColor),
      iconSize: iconSize,
    });
  };

  return { createIcon, stringToColour, iconStucture };
};

export default useLeafMapIcon;
