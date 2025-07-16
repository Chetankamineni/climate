export interface Coordinates{
    lat: number;
    lon: number;
}

export interface WeatherCondition {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface WeatherData {
    coord: Coordinates;
    weather: WeatherCondition[];
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
    name: string;
    cod: number;
}

export interface ForecastData {
    list: Array<{
        dt: number;
        main: WeatherData['main'];
        weather: WeatherData['weather'];
        wind: WeatherData['wind'];
        dt_txt: string;
    }>;
    city: {
        name: string;
        country: string;
        sunrise: number;
        sunset: number;
    };
}

export interface GeocodingResponse {
    name: string;
    local_names: Record<string, string>;
    lat: number;
    lon: number;
    country: string;
    state?: string;
}

export interface AirPollutionData {
    coord: Coordinates;
    list: Array<{
        dt: number;
        main: {
            aqi: number; // Air Quality Index
        };
        components: {
            co: number; // Carbon monoxide
            no: number; // Nitrogen monoxide
            no2: number; // Nitrogen dioxide
            o3: number; // Ozone
            so2: number; // Sulphur dioxide
            pm2_5: number; // Fine particles matter
            pm10: number; // Coarse particulate matter
            nh3: number; // Ammonia
        };
    }>;
}