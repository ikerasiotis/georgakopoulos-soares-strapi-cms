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

export interface PublicationAuthor extends Struct.ComponentSchema {
  collectionName: 'components_publication_authors';
  info: {
    displayName: 'Author';
    icon: 'user';
  };
  attributes: {
    authorId: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'sample-author-id'>;
    link: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://scholar.google.com'>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'John Doe'>;
  };
}

export interface PublicationResource extends Struct.ComponentSchema {
  collectionName: 'components_publication_resources';
  info: {
    displayName: 'Resource';
    icon: 'attachment';
  };
  attributes: {
    fileFormat: Schema.Attribute.String & Schema.Attribute.DefaultTo<'PDF'>;
    link: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://example.com/resource.pdf'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Publisher Website'>;
  };
}

export interface ResearchFocusArea extends Struct.ComponentSchema {
  collectionName: 'components_research_focus_areas';
  info: {
    displayName: 'Focus Area';
    icon: 'bullseye';
  };
  attributes: {
    accent: Schema.Attribute.Enumeration<['primary', 'secondary', 'accent']> &
      Schema.Attribute.DefaultTo<'primary'>;
    descriptionParagraphs: Schema.Attribute.Component<
      'research.paragraph',
      true
    >;
    projects: Schema.Attribute.Component<'research.list-item', true>;
    tags: Schema.Attribute.Component<'research.tag', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ResearchHighlight extends Struct.ComponentSchema {
  collectionName: 'components_research_highlights';
  info: {
    displayName: 'Highlight';
    icon: 'sun';
  };
  attributes: {
    accent: Schema.Attribute.Enumeration<['primary', 'secondary', 'accent']> &
      Schema.Attribute.DefaultTo<'primary'>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ResearchLink extends Struct.ComponentSchema {
  collectionName: 'components_research_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ResearchListItem extends Struct.ComponentSchema {
  collectionName: 'components_research_list_items';
  info: {
    displayName: 'List Item';
    icon: 'dot-circle';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ResearchMethod extends Struct.ComponentSchema {
  collectionName: 'components_research_methods';
  info: {
    displayName: 'Method';
    icon: 'cog';
  };
  attributes: {
    accent: Schema.Attribute.Enumeration<['primary', 'secondary', 'accent']> &
      Schema.Attribute.DefaultTo<'primary'>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ResearchParagraph extends Struct.ComponentSchema {
  collectionName: 'components_research_paragraphs';
  info: {
    displayName: 'Paragraph';
    icon: 'align-left';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ResearchResource extends Struct.ComponentSchema {
  collectionName: 'components_research_resources';
  info: {
    displayName: 'Resource';
    icon: 'archive';
  };
  attributes: {
    accent: Schema.Attribute.Enumeration<['primary', 'secondary', 'accent']> &
      Schema.Attribute.DefaultTo<'primary'>;
    description: Schema.Attribute.Text;
    links: Schema.Attribute.Component<'research.link', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ResearchTag extends Struct.ComponentSchema {
  collectionName: 'components_research_tags';
  info: {
    displayName: 'Tag';
    icon: 'tag';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
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
      'publication.author': PublicationAuthor;
      'publication.resource': PublicationResource;
      'research.focus-area': ResearchFocusArea;
      'research.highlight': ResearchHighlight;
      'research.link': ResearchLink;
      'research.list-item': ResearchListItem;
      'research.method': ResearchMethod;
      'research.paragraph': ResearchParagraph;
      'research.resource': ResearchResource;
      'research.tag': ResearchTag;
      'team.education-item': TeamEducationItem;
      'team.member': TeamMember;
      'team.social-link': TeamSocialLink;
    }
  }
}
