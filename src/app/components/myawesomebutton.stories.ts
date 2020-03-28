import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { AwesomeButtonsComponent } from './myawesomebutton.component';
import { MatButtonModule, } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
export default {
    title: 'My Buttons',
    decorators: [
        moduleMetadata({
          // imports both components to allow component composition with storybook
          declarations: [AwesomeButtonsComponent],
          imports: [CommonModule, MatButtonModule,MatIconModule],
        }),
      ],
}


export const Default = () => ({
    component: AwesomeButtonsComponent
});
