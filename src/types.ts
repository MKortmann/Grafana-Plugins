type SeriesSize = 'sm' | 'md' | 'lg';
type FontFamily = 'monospace' | 'sansSerif';
type CircleColor = 'red' | 'green' | 'blue';
type FontWeight = 'regular' | 'bold';

export interface SimpleOptions {
  text: string;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
  fontFace: FontFamily;
  showFontFace: boolean;
  circleColor: CircleColor;
  showCircleColor: boolean;
  fontWeight: FontWeight;
  showFontWeight: boolean;
}

export interface DemoFieldConfig {
  shape: 'triangle' | 'circle' | 'square';
}
