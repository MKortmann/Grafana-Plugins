import { PanelPlugin } from '@grafana/data';
import { SimpleOptions, DemoFieldConfig } from './types';
import { SimplePanel } from './SimplePanel';



// when plugin should display specific standard options
// export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel) .useFieldConfig();

// // when plugin should use all standard options
// export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).useFieldConfig();

export const plugin = new PanelPlugin<SimpleOptions, DemoFieldConfig>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'text',
      name: 'Simple text option',
      description: 'Description of panel option',
      defaultValue: 'Default value of text input option',
    })
    .addBooleanSwitch({
      path: 'showSeriesCount',
      name: 'Show series counter',
      defaultValue: false,
    })
    .addRadio({
      path: 'seriesCountSize',
      defaultValue: 'sm',
      name: 'Series counter size',
      settings: {
        options: [
          {
            value: 'sm',
            label: 'Small',
          },
          {
            value: 'md',
            label: 'Medium',
          },
          {
            value: 'lg',
            label: 'Large',
          },
        ],
      },
      showIf: (config) => config.showSeriesCount,
    })
    .addBooleanSwitch({
      path: 'showFontFace',
      name: 'Show Font',
      defaultValue: false,
    })
    .addRadio({
      path: 'fontFace',
      name: 'Font face',
      description: 'Choose a font for the values',
      settings: {
        options: [
        {
          value: 'monospace',
          label: 'Monospace',
        },
        {
          value: 'sansSerif',
          label: 'Sans Serif',
        }
        ]
      },
      defaultValue: 'arial',
      showIf: (config) => config.showFontFace
    })
    .addBooleanSwitch({
      path: 'showFontWeight',
      name: 'Show Font Weight',
      defaultValue: false,
    })
    .addRadio({
      path: 'fontWeight',
      name: 'Font Weight',
      description: 'Choose a font weight',
      settings: {
        options: [
        {
          value: 'regular',
          label: 'Regular',
        },
        {
          value: 'bold',
          label: 'Bold',
        }
        ]
      },
      defaultValue: 'light',
      showIf: (config) => config.showFontWeight
    })
    .addBooleanSwitch({
      path: 'showCircleColor',
      name: 'Show Circle Color',
      defaultValue: false,
    })
    .addRadio({
      path: 'circleColor',
      name: 'Circle Color',
      description: 'Change the color of the circle',
      settings: {
        options: [
        {
          value: 'red',
          label: 'Red',
        },
        {
          value: 'green',
          label: 'Green',
        },
        {
          value: 'blue',
          label: 'Blue',
        }
        ]
      },
      defaultValue: 'blue',
      showIf: (config) => config.showCircleColor
    })
})
.useFieldConfig({
  useCustomConfig: (builder) => {
    builder.addRadio({
      path: 'shape',
      name: 'Shape',
      description: 'Choose a shape',
      settings: {
        options: [
          {
            value: 'triangle',
            label: 'Triangle',
          },
          {
            value: 'circle',
            label: 'Circle',
          },
          {
            value: 'square',
            label: 'Square',
          }
        ]
      },
      defaultValue: 'square'
    })
  }
})

