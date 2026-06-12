import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CodeViewer } from "../../../components/code-viewer/code-viewer";

@Component({
  selector: 'app-template-anchor-links',
  imports: [RouterLink, CodeViewer],
  templateUrl: './template-anchor-links.html',
  styleUrl: './template-anchor-links.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateAnchorLinks {
  linksTemplateCode = `
    @for (
      item of content; track item.id
    ) {
        <a class="button outline" 
          [routerLink]="[]" 
          [fragment]="item.id"
        >{{item.title}}</a>
    }
  `

  sectionTemplateCode = `
    <section [id]="item.id">
      <h3>#{{item.title}}</h3>
      <p>{{item.text}}</p>
    </section>
  `

  routesTemplateCode = `
    withInMemoryScrolling({
      anchorScrolling: 'enabled'
    })
  `

  cssTemplateCode = `
    html {
        scroll-behavior: smooth;
    }
  `

  readonly content = [
    {
      id: 'about',
      title: 'About section',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id alias consequatur commodi! Natus voluptatum assumenda esse, voluptatibus placeat rem nemo sapiente culpa impedit molestiae. Tempore repudiandae quibusdam nesciunt, illo officia nisi ex debitis exercitationem, dicta consequuntur dignissimos adipisci minima, at molestiae amet quasi. Dignissimos repudiandae similique maxime animi neque, ipsum exercitationem veritatis accusantium pariatur, hic voluptas. Expedita voluptatibus sunt quibusdam praesentium minus incidunt fuga aut. Dolorem minima, harum facilis modi earum ullam reiciendis aspernatur magnam commodi rerum aliquam assumenda rem, unde natus necessitatibus temporibus deserunt. Eos, at qui consequatur saepe quod nobis quae excepturi minus dolores vitae quam doloribus a eius iusto? Commodi natus odio, praesentium temporibus harum accusantium, voluptatibus, numquam dolore neque quas itaque nesciunt quam eligendi eaque. Sapiente modi dicta ipsum beatae reprehenderit doloremque. Sed modi rem ipsum molestias velit, mollitia dolorem reiciendis eveniet quae deleniti optio explicabo nostrum veritatis ipsa esse voluptatum obcaecati totam provident magnam quasi non illo? Consequuntur, pariatur voluptas. Officiis mollitia quidem quis laudantium totam quae id in enim cupiditate nesciunt sit blanditiis ut consectetur aperiam praesentium, vel et iure. Nostrum facere temporibus ab eius minima autem corrupti alias laboriosam? Quas minima asperiores numquam. Est illum deleniti architecto ducimus. Placeat pariatur incidunt, sed quae ipsa, sunt delectus voluptatum mollitia, ad animi eum. Neque laboriosam alias nulla omnis sed repellendus soluta. Incidunt officiis est voluptas illo doloremque modi excepturi, nam laborum, vel inventore officia repellat atque numquam. Neque, vero incidunt. Esse quos distinctio quam provident, facilis voluptatum unde velit repellendus quo. A vitae inventore sed, nam qui laborum voluptas assumenda est soluta vero quae fuga quaerat debitis neque ullam asperiores reprehenderit ducimus velit beatae quia veniam suscipit voluptatem accusamus atque? Corrupti, nostrum placeat totam dolor culpa, corporis quisquam, necessitatibus inventore deleniti nobis odit quod aperiam architecto praesentium voluptates dolorum quos! Non, harum? Quam, quisquam exercitationem.'
    },
    {
      id: 'history',
      title: 'History section',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id alias consequatur commodi! Natus voluptatum assumenda esse, voluptatibus placeat rem nemo sapiente culpa impedit molestiae. Tempore repudiandae quibusdam nesciunt, illo officia nisi ex debitis exercitationem, dicta consequuntur dignissimos adipisci minima, at molestiae amet quasi. Dignissimos repudiandae similique maxime animi neque, ipsum exercitationem veritatis accusantium pariatur, hic voluptas. Expedita voluptatibus sunt quibusdam praesentium minus incidunt fuga aut. Dolorem minima, harum facilis modi earum ullam reiciendis aspernatur magnam commodi rerum aliquam assumenda rem, unde natus necessitatibus temporibus deserunt. Eos, at qui consequatur saepe quod nobis quae excepturi minus dolores vitae quam doloribus a eius iusto? Commodi natus odio, praesentium temporibus harum accusantium, voluptatibus, numquam dolore neque quas itaque nesciunt quam eligendi eaque. Sapiente modi dicta ipsum beatae reprehenderit doloremque. Sed modi rem ipsum molestias velit, mollitia dolorem reiciendis eveniet quae deleniti optio explicabo nostrum veritatis ipsa esse voluptatum obcaecati totam provident magnam quasi non illo? Consequuntur, pariatur voluptas. Officiis mollitia quidem quis laudantium totam quae id in enim cupiditate nesciunt sit blanditiis ut consectetur aperiam praesentium, vel et iure. Nostrum facere temporibus ab eius minima autem corrupti alias laboriosam? Quas minima asperiores numquam. Est illum deleniti architecto ducimus. Placeat pariatur incidunt, sed quae ipsa, sunt delectus voluptatum mollitia, ad animi eum. Neque laboriosam alias nulla omnis sed repellendus soluta. Incidunt officiis est voluptas illo doloremque modi excepturi, nam laborum, vel inventore officia repellat atque numquam. Neque, vero incidunt. Esse quos distinctio quam provident, facilis voluptatum unde velit repellendus quo. A vitae inventore sed, nam qui laborum voluptas assumenda est soluta vero quae fuga quaerat debitis neque ullam asperiores reprehenderit ducimus velit beatae quia veniam suscipit voluptatem accusamus atque? Corrupti, nostrum placeat totam dolor culpa, corporis quisquam, necessitatibus inventore deleniti nobis odit quod aperiam architecto praesentium voluptates dolorum quos! Non, harum? Quam, quisquam exercitationem.'
    },
    {
      id: 'summary',
      title: 'Summary section',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id alias consequatur commodi! Natus voluptatum assumenda esse, voluptatibus placeat rem nemo sapiente culpa impedit molestiae. Tempore repudiandae quibusdam nesciunt, illo officia nisi ex debitis exercitationem, dicta consequuntur dignissimos adipisci minima, at molestiae amet quasi. Dignissimos repudiandae similique maxime animi neque, ipsum exercitationem veritatis accusantium pariatur, hic voluptas. Expedita voluptatibus sunt quibusdam praesentium minus incidunt fuga aut. Dolorem minima, harum facilis modi earum ullam reiciendis aspernatur magnam commodi rerum aliquam assumenda rem, unde natus necessitatibus temporibus deserunt. Eos, at qui consequatur saepe quod nobis quae excepturi minus dolores vitae quam doloribus a eius iusto? Commodi natus odio, praesentium temporibus harum accusantium, voluptatibus, numquam dolore neque quas itaque nesciunt quam eligendi eaque. Sapiente modi dicta ipsum beatae reprehenderit doloremque. Sed modi rem ipsum molestias velit, mollitia dolorem reiciendis eveniet quae deleniti optio explicabo nostrum veritatis ipsa esse voluptatum obcaecati totam provident magnam quasi non illo? Consequuntur, pariatur voluptas. Officiis mollitia quidem quis laudantium totam quae id in enim cupiditate nesciunt sit blanditiis ut consectetur aperiam praesentium, vel et iure. Nostrum facere temporibus ab eius minima autem corrupti alias laboriosam? Quas minima asperiores numquam. Est illum deleniti architecto ducimus. Placeat pariatur incidunt, sed quae ipsa, sunt delectus voluptatum mollitia, ad animi eum. Neque laboriosam alias nulla omnis sed repellendus soluta. Incidunt officiis est voluptas illo doloremque modi excepturi, nam laborum, vel inventore officia repellat atque numquam. Neque, vero incidunt. Esse quos distinctio quam provident, facilis voluptatum unde velit repellendus quo. A vitae inventore sed, nam qui laborum voluptas assumenda est soluta vero quae fuga quaerat debitis neque ullam asperiores reprehenderit ducimus velit beatae quia veniam suscipit voluptatem accusamus atque? Corrupti, nostrum placeat totam dolor culpa, corporis quisquam, necessitatibus inventore deleniti nobis odit quod aperiam architecto praesentium voluptates dolorum quos! Non, harum? Quam, quisquam exercitationem.'
    },
  ]
}
