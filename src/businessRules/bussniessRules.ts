export enum Applicationstatus {
  Zgloszone = "ZGŁOSZONE",
  Odrzucone = "ODRZUCONE",
  Zakonczone = "ZAKOŃCZONE",
}

export enum MapPlaces {
  wieruszow = "[51.29488, 18.15547]",
  swiba = "[51.2920880, 18.1026238]",
}

export enum MainMapPlaces {
  center = MapPlaces.wieruszow,
}

export enum MapZoom {
  maxZoom = 18,
  minZoom = 10,
  startZoom = 14,
}
