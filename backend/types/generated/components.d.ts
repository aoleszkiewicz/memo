import type { Schema, Attribute } from '@strapi/strapi';

export interface AddonsSong extends Schema.Component {
  collectionName: 'components_addons_songs';
  info: {
    displayName: 'Song';
    icon: 'music';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'addons.song': AddonsSong;
    }
  }
}
