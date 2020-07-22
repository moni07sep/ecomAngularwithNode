import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Free Printable Coloring Pages / practice sheet for Kids and Adults';
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'coloring page, Mandala, practice sheet, dot to dot, printable, adult coloring, free , Mandala coloring, kids coloring  '},
      {name: 'description', content: 'Download these printable coloring pages for adults and kids.coloring pages in a variety of styles including mandalas, dot to dot ,color by number and flora . Practice sheet are also available for mandalas and calligraphy. The perfect Anti-stress art therapy for you ! '},
      {name: 'robots', content: 'index, follow'}
    ]);
  }
}
