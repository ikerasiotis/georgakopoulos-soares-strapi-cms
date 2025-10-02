import type { Schema, Struct } from '@strapi/strapi';

export interface NavigationLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_links';
  info: {
    description: 'Navigation link item';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    ariaLabel: Schema.Attribute.String;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TeamEducationItem extends Struct.ComponentSchema {
  collectionName: 'components_team_education_items';
  info: {
    displayName: 'Education Item';
    icon: 'graduation-cap';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TeamMember extends Struct.ComponentSchema {
  collectionName: 'components_team_members';
  info: {
    displayName: 'Team Member';
    icon: 'users';
  };
  attributes: {
    affiliation: Schema.Attribute.String;
    bio: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    focus: Schema.Attribute.String;
    github: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    portrait: Schema.Attribute.Media<'images'>;
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TeamSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_team_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'share-alt';
  };
  attributes: {
    iconKey: Schema.Attribute.Enumeration<
      ['twitter', 'linkedin', 'scholar', 'github', 'link']
    > &
      Schema.Attribute.DefaultTo<'link'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'navigation.link': NavigationLink;
      'team.education-item': TeamEducationItem;
      'team.member': TeamMember;
      'team.social-link': TeamSocialLink;
    }
  }
}
