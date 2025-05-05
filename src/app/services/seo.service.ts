import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title, private meta: Meta) { }

  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  updateOgUrl(url: string) {
    this.meta.updateTag({ name: 'og:url', content: url })
  }

  updateOgTitle(url: string) {
    this.meta.updateTag({ name: 'og:title', content: url })
  }

  updateOgDescription(url: string) {
    this.meta.updateTag({ name: 'og:description', content: url })
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc })
  }

  updateMetaTags(metaTags: MetaDefinition[]){
    metaTags.forEach(m => this.meta.updateTag(m));
  }

}