import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Leaf, Star } from "lucide-react";
import type { AirPollutionData } from "@/api/types";

interface AirQualityCardProps {
  data: AirPollutionData;
}

const getAqiDescription = (aqi: number) => {
  if (aqi === 1) return "Good";
  if (aqi === 2) return "Fair";
  if (aqi === 3) return "Moderate";
  if (aqi === 4) return "Poor";
  if (aqi === 5) return "Very Poor";
  return "N/A";
};

const getAqiColor = (aqi: number) => {
  if (aqi === 1) return "text-green-500";
  if (aqi === 2) return "text-yellow-500";
  if (aqi === 3) return "text-orange-500";
  if (aqi === 4) return "text-red-500";
  if (aqi === 5) return "text-purple-500";
  return "text-gray-500";
};

export function AirQualityCard({ data }: AirQualityCardProps) {
  const aqi = data.list[0]?.main.aqi;
  const components = data.list[0]?.components;
  const aqiDescription = getAqiDescription(aqi);
  const aqiColor = getAqiColor(aqi);

  // Helper to format pollutant values (assuming micrograms per cubic meter for now)
  const formatPollutant = (value: number) => `${value.toFixed(2)} μg/m³`;

  const pollutantDetails = components ? [
    { title: "PM2.5", value: formatPollutant(components.pm2_5) },
    { title: "PM10", value: formatPollutant(components.pm10) },
  ] : [];

  return (
    <Card className="min-h-[260px]"> 
      <CardHeader>
        <CardTitle>Air Quality Index</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-lg border p-4 sm:col-span-2">
            <Leaf className={`h-5 w-5 ${aqiColor}`} />
            <div>
              <p className="text-sm font-medium leading-none">Overall AQI</p>
              <p className="text-sm text-muted-foreground">
                {aqi} - {aqiDescription}
              </p>
            </div>
          </div>

          {pollutantDetails.map((detail) => (
            <div key={detail.title} className="flex items-center gap-3 rounded-lg border p-4">
              <Star className="h-5 w-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium leading-none">
                  {detail.title}
                </p>
                <p className="text-sm text-muted-foreground">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}