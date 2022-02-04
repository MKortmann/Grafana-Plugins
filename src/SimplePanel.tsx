import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory, useTheme } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme();
  const styles = getStyles();

  let color: string;

  switch(options.circleColor) {
    case 'red':
      color = theme.palette.redBase;
      break;
    case 'green':
      color = theme.palette.greenBase;
      break;
    case 'blue':
      color = theme.palette.blue95;
      break;
  }

  let radii: any = data.series
    .map(series => series.fields.find(field => field.type === 'number'))
    .map(field => field?.values.get(field.values.length -1))

  radii = radii < 5 ? 5 : radii;

  radii = Math.trunc(radii)*3;

  color = radii % 2 === 0 ? theme.palette.brandDanger : theme.palette.brandSuccess;



  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <svg
        className={styles.svg}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={`-${width / 2} -${height / 2} ${width} ${height}`}
      >
        <g>
          <circle style={{ fill: `${color}`}} r={radii} />
          {/* <circle style={{ fill: `${theme.isLight ? theme.palette.greenBase : theme.palette.brandDanger}` }} r={100} /> */}
        </g>
      </svg>

      <div className={styles.textBox}>
        {options.showSeriesCount && (
          <div
            className={css`
              font-size: ${theme.typography.size[options.seriesCountSize]};
              font-family: ${theme.typography.fontFamily[options.fontFace]};
              font-weight: ${theme.typography.weight[options.fontWeight]};
            `}
          >
            Number of series: {data.series.length}
            Radius: {radii}
          </div>
        )}
        <div>Text option value: {options.text}</div>
      </div>
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
})
