export interface WeatherData {
    weather: { icon: string; description: string }[];
    main: { temp: number; humidity: number; temp_min: number; temp_max: number };
    wind: { speed: number };
    name: string;
  }
  