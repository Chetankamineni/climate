// src/pages/city-page.tsx

import { useParams, useSearchParams } from "react-router-dom";
import { useWeatherQuery, useForecastQuery } from "@/hooks/use-weather";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { CurrentWeather } from "../components/current-weather";
import { HourlyTemperature } from "../components/hourly-temperature";
import { WeatherDetails } from "../components/weather-details";
import { WeatherForecast } from "../components/weather-forecast";
import WeatherSkeleton from "../components/loading-skeleton";
import { FavoriteButton } from "../components/favorite-button";
import { AirQualityCard } from "../components/air-quality-card";
import { useQuery } from "@tanstack/react-query";
import { weatherAPI } from "@/api/weather";

export function CityPage() {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const lat = parseFloat(searchParams.get("lat") || "0");
  const lon = parseFloat(searchParams.get("lon") || "0");

  const coordinates = { lat, lon };

  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);
  const aqiQuery = useQuery({
      queryKey: ["air-pollution", coordinates],
      queryFn: () => (coordinates ? weatherAPI.getAirPollution(coordinates) : null),
      enabled: !!coordinates,
      staleTime: 5 * 60 * 1000,
  });

  if (weatherQuery.error || forecastQuery.error || aqiQuery.error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          Failed to load weather data. Please try again.
        </AlertDescription>
      </Alert>
    );
  }

  if (!weatherQuery.data || !forecastQuery.data || !aqiQuery.data || !params.cityName) {
    return <WeatherSkeleton />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          {params.cityName}, {weatherQuery.data.sys.country}
        </h1>
        <div className="flex gap-2">
          <FavoriteButton
            data={{ ...weatherQuery.data, name: params.cityName }}
          />
        </div>
      </div>

      <div className="grid gap-6">
        <CurrentWeather data={weatherQuery.data} />
        <HourlyTemperature data={forecastQuery.data} />

        {/* New main container for side-by-side layout */}
        <div className="grid gap-6 md:grid-cols-2 items-start">
          {/* Left Container: Weather Details & AQI Card, stacked vertically */}
          <div className="grid gap-6">
            <WeatherDetails data={weatherQuery.data} />
            <AirQualityCard data={aqiQuery.data} />
          </div>

          {/* Right Container: 5-Day Forecast */}
          <WeatherForecast data={forecastQuery.data} />
        </div>
      </div>
    </div>
  );
}