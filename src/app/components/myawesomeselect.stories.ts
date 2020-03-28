import { AwesomeSelectComponent } from './myawesomeselect.component';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
    title: 'AwesomeSelect',
    decorators: [withKnobs],
    excludeStories: /.*Data$/,
};

export const awesomeData = [
    'banana', 'kiwi', 'boop', 'mango'
];

export const Default = () => ({
    component: AwesomeSelectComponent,
    props: {
        selectedOption: select('selectedOption', awesomeData, 'banana')
    }
});
