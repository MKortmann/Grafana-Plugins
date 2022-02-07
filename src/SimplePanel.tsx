import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
// import { css, cx } from 'emotion';
import { useTheme } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme();

  const values = [4,8,15, 16, 23, 42];

  const barHeight = height / values.length;

  return (
    <svg width={width} height={height}>
      <g>
        {values.map((value, i) => (
          <rect x={0} y={i * barHeight} width={value} height={barHeight - 1} fill={theme.palette.greenBase} />
        ))}
      </g>
    </svg>
  )
};


