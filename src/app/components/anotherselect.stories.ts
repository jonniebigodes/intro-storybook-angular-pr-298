import { AnotherSelectComponent } from './anotherselect.component';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'Another Select',
  decorators: [withKnobs],
  excludeStories: /.*Data$/
};

export const otherSelectData = {
    Red: 'red',
    Blue: 'blue',
    Yellow: 'yellow',
    Rainbow: ['red', 'orange', 'etc'],
    None: null,
}

export const Default = () => ({
    component: AnotherSelectComponent,
    props: {
        anotherOption: select('anotherOption', otherSelectData, 'red')
    }
});