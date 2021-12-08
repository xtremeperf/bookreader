import { html } from 'lit-element';
import '@internetarchive/icon-share/icon-share';
import '@internetarchive/ia-sharing-options';

export default class {
  constructor({
    item,
    baseHost,
    bookreader
  }) {
    const { identifier, creator, title } = item?.metadata;
    const subPrefix = bookreader.options.subPrefix;
    const encodedSubPrefix = encodeURIComponent(subPrefix);
    const urlIdentifier = subPrefix && (subPrefix !== identifier) ? `${identifier}/${encodedSubPrefix}` : identifier;
    const label = `Share this book`;
    this.icon = html`<ia-icon-share style="width: var(--iconWidth); height: var(--iconHeight);"></ia-icon-share>`;
    this.label = label;
    this.id = 'share';
    this.component = html`<ia-sharing-options
      identifier="${urlIdentifier}"
      type="book"
      creator="${creator}"
      description="${title}"
      baseHost="${baseHost}"
    ></ia-sharing-options>`;
  }
}
