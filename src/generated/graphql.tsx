import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** Who am I, what I do, and what I want to do in the future [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/about) */
export type About = Entry & {
  __typename?: 'About';
  contentfulMetadata: ContentfulMetadata;
  iconsCollection?: Maybe<AboutIconsCollection>;
  linkedFrom?: Maybe<AboutLinkingCollections>;
  sectionHeading?: Maybe<Scalars['String']>;
  sectionParagraph?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Who am I, what I do, and what I want to do in the future [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/about) */
export type AboutIconsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Who am I, what I do, and what I want to do in the future [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/about) */
export type AboutLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Who am I, what I do, and what I want to do in the future [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/about) */
export type AboutSectionHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Who am I, what I do, and what I want to do in the future [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/about) */
export type AboutSectionParagraphArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AboutCollection = {
  __typename?: 'AboutCollection';
  items: Array<Maybe<About>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AboutFilter = {
  AND?: InputMaybe<Array<InputMaybe<AboutFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AboutFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  iconsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sectionHeading?: InputMaybe<Scalars['String']>;
  sectionHeading_contains?: InputMaybe<Scalars['String']>;
  sectionHeading_exists?: InputMaybe<Scalars['Boolean']>;
  sectionHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionHeading_not?: InputMaybe<Scalars['String']>;
  sectionHeading_not_contains?: InputMaybe<Scalars['String']>;
  sectionHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionParagraph?: InputMaybe<Scalars['String']>;
  sectionParagraph_contains?: InputMaybe<Scalars['String']>;
  sectionParagraph_exists?: InputMaybe<Scalars['Boolean']>;
  sectionParagraph_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sectionParagraph_not?: InputMaybe<Scalars['String']>;
  sectionParagraph_not_contains?: InputMaybe<Scalars['String']>;
  sectionParagraph_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AboutIconsCollection = {
  __typename?: 'AboutIconsCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AboutLinkingCollections = {
  __typename?: 'AboutLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AboutLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AboutOrder {
  SectionHeadingAsc = 'sectionHeading_ASC',
  SectionHeadingDesc = 'sectionHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  experienceCollection?: Maybe<ExperienceCollection>;
  personalInfoCollection?: Maybe<PersonalInfoCollection>;
  projectCollection?: Maybe<ProjectCollection>;
  socialMediaCollection?: Maybe<SocialMediaCollection>;
  userCollection?: Maybe<UserCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPersonalInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsSocialMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsUserCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Past and current work experiences [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/experience) */
export type Experience = Entry & {
  __typename?: 'Experience';
  companyLogo?: Maybe<Asset>;
  companyName?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<ExperienceDescription>;
  jobTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ExperienceLinkingCollections>;
  sys: Sys;
  timeWorked?: Maybe<Scalars['String']>;
};


/** Past and current work experiences [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/experience) */
export type ExperienceCompanyLogoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Past and current work experiences [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/experience) */
export type ExperienceCompanyNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Past and current work experiences [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/experience) */
export type ExperienceDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Past and current work experiences [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/experience) */
export type ExperienceJobTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Past and current work experiences [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/experience) */
export type ExperienceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Past and current work experiences [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/experience) */
export type ExperienceTimeWorkedArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ExperienceCollection = {
  __typename?: 'ExperienceCollection';
  items: Array<Maybe<Experience>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ExperienceDescription = {
  __typename?: 'ExperienceDescription';
  json: Scalars['JSON'];
  links: ExperienceDescriptionLinks;
};

export type ExperienceDescriptionAssets = {
  __typename?: 'ExperienceDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ExperienceDescriptionEntries = {
  __typename?: 'ExperienceDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ExperienceDescriptionLinks = {
  __typename?: 'ExperienceDescriptionLinks';
  assets: ExperienceDescriptionAssets;
  entries: ExperienceDescriptionEntries;
};

export type ExperienceFilter = {
  AND?: InputMaybe<Array<InputMaybe<ExperienceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ExperienceFilter>>>;
  companyLogo_exists?: InputMaybe<Scalars['Boolean']>;
  companyName?: InputMaybe<Scalars['String']>;
  companyName_contains?: InputMaybe<Scalars['String']>;
  companyName_exists?: InputMaybe<Scalars['Boolean']>;
  companyName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  companyName_not?: InputMaybe<Scalars['String']>;
  companyName_not_contains?: InputMaybe<Scalars['String']>;
  companyName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  jobTitle_contains?: InputMaybe<Scalars['String']>;
  jobTitle_exists?: InputMaybe<Scalars['Boolean']>;
  jobTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  jobTitle_not?: InputMaybe<Scalars['String']>;
  jobTitle_not_contains?: InputMaybe<Scalars['String']>;
  jobTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  timeWorked?: InputMaybe<Scalars['String']>;
  timeWorked_contains?: InputMaybe<Scalars['String']>;
  timeWorked_exists?: InputMaybe<Scalars['Boolean']>;
  timeWorked_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  timeWorked_not?: InputMaybe<Scalars['String']>;
  timeWorked_not_contains?: InputMaybe<Scalars['String']>;
  timeWorked_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ExperienceLinkingCollections = {
  __typename?: 'ExperienceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ExperienceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ExperienceOrder {
  CompanyNameAsc = 'companyName_ASC',
  CompanyNameDesc = 'companyName_DESC',
  JobTitleAsc = 'jobTitle_ASC',
  JobTitleDesc = 'jobTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TimeWorkedAsc = 'timeWorked_ASC',
  TimeWorkedDesc = 'timeWorked_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/icon) */
export type Icon = Entry & {
  __typename?: 'Icon';
  color?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  fontSize?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<IconLinkingCollections>;
  sys: Sys;
  typeKey?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/icon) */
export type IconColorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/icon) */
export type IconFontSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/icon) */
export type IconLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/icon) */
export type IconTypeKeyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IconCollection = {
  __typename?: 'IconCollection';
  items: Array<Maybe<Icon>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type IconFilter = {
  AND?: InputMaybe<Array<InputMaybe<IconFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IconFilter>>>;
  color?: InputMaybe<Scalars['String']>;
  color_contains?: InputMaybe<Scalars['String']>;
  color_exists?: InputMaybe<Scalars['Boolean']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color_not?: InputMaybe<Scalars['String']>;
  color_not_contains?: InputMaybe<Scalars['String']>;
  color_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fontSize?: InputMaybe<Scalars['Int']>;
  fontSize_exists?: InputMaybe<Scalars['Boolean']>;
  fontSize_gt?: InputMaybe<Scalars['Int']>;
  fontSize_gte?: InputMaybe<Scalars['Int']>;
  fontSize_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  fontSize_lt?: InputMaybe<Scalars['Int']>;
  fontSize_lte?: InputMaybe<Scalars['Int']>;
  fontSize_not?: InputMaybe<Scalars['Int']>;
  fontSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  typeKey?: InputMaybe<Scalars['String']>;
  typeKey_contains?: InputMaybe<Scalars['String']>;
  typeKey_exists?: InputMaybe<Scalars['Boolean']>;
  typeKey_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  typeKey_not?: InputMaybe<Scalars['String']>;
  typeKey_not_contains?: InputMaybe<Scalars['String']>;
  typeKey_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IconLinkingCollections = {
  __typename?: 'IconLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type IconLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum IconOrder {
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  FontSizeAsc = 'fontSize_ASC',
  FontSizeDesc = 'fontSize_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeKeyAsc = 'typeKey_ASC',
  TypeKeyDesc = 'typeKey_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/navigation) */
export type Navigation = Entry & {
  __typename?: 'Navigation';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NavigationLinkingCollections>;
  pathname?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/navigation) */
export type NavigationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/navigation) */
export type NavigationPathnameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/navigation) */
export type NavigationTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type NavigationCollection = {
  __typename?: 'NavigationCollection';
  items: Array<Maybe<Navigation>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavigationFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  pathname?: InputMaybe<Scalars['String']>;
  pathname_contains?: InputMaybe<Scalars['String']>;
  pathname_exists?: InputMaybe<Scalars['Boolean']>;
  pathname_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pathname_not?: InputMaybe<Scalars['String']>;
  pathname_not_contains?: InputMaybe<Scalars['String']>;
  pathname_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NavigationLinkingCollections = {
  __typename?: 'NavigationLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type NavigationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum NavigationOrder {
  PathnameAsc = 'pathname_ASC',
  PathnameDesc = 'pathname_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** My personal information [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/personalInfo) */
export type PersonalInfo = Entry & {
  __typename?: 'PersonalInfo';
  bio?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  email?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  headshot?: Maybe<Asset>;
  linkedFrom?: Maybe<PersonalInfoLinkingCollections>;
  linkedin?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** My personal information [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/personalInfo) */
export type PersonalInfoBioArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** My personal information [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/personalInfo) */
export type PersonalInfoEmailArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** My personal information [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/personalInfo) */
export type PersonalInfoGithubArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** My personal information [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/personalInfo) */
export type PersonalInfoHeadshotArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** My personal information [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/personalInfo) */
export type PersonalInfoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** My personal information [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/personalInfo) */
export type PersonalInfoLinkedinArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** My personal information [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/personalInfo) */
export type PersonalInfoLocationArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** My personal information [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/personalInfo) */
export type PersonalInfoNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** My personal information [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/personalInfo) */
export type PersonalInfoTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PersonalInfoCollection = {
  __typename?: 'PersonalInfoCollection';
  items: Array<Maybe<PersonalInfo>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PersonalInfoFilter = {
  AND?: InputMaybe<Array<InputMaybe<PersonalInfoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PersonalInfoFilter>>>;
  bio?: InputMaybe<Scalars['String']>;
  bio_contains?: InputMaybe<Scalars['String']>;
  bio_exists?: InputMaybe<Scalars['Boolean']>;
  bio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bio_not?: InputMaybe<Scalars['String']>;
  bio_not_contains?: InputMaybe<Scalars['String']>;
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_exists?: InputMaybe<Scalars['Boolean']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_not?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  github?: InputMaybe<Scalars['String']>;
  github_contains?: InputMaybe<Scalars['String']>;
  github_exists?: InputMaybe<Scalars['Boolean']>;
  github_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  github_not?: InputMaybe<Scalars['String']>;
  github_not_contains?: InputMaybe<Scalars['String']>;
  github_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headshot_exists?: InputMaybe<Scalars['Boolean']>;
  linkedin?: InputMaybe<Scalars['String']>;
  linkedin_contains?: InputMaybe<Scalars['String']>;
  linkedin_exists?: InputMaybe<Scalars['Boolean']>;
  linkedin_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkedin_not?: InputMaybe<Scalars['String']>;
  linkedin_not_contains?: InputMaybe<Scalars['String']>;
  linkedin_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<Scalars['String']>;
  location_contains?: InputMaybe<Scalars['String']>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_not?: InputMaybe<Scalars['String']>;
  location_not_contains?: InputMaybe<Scalars['String']>;
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PersonalInfoLinkingCollections = {
  __typename?: 'PersonalInfoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PersonalInfoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PersonalInfoOrder {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  GithubAsc = 'github_ASC',
  GithubDesc = 'github_DESC',
  LinkedinAsc = 'linkedin_ASC',
  LinkedinDesc = 'linkedin_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/preview) */
export type Preview = Entry & {
  __typename?: 'Preview';
  contentfulMetadata: ContentfulMetadata;
  experienceDescription?: Maybe<Scalars['String']>;
  experienceHeading?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PreviewLinkingCollections>;
  projectDescription?: Maybe<Scalars['String']>;
  projectHeading?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/preview) */
export type PreviewExperienceDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/preview) */
export type PreviewExperienceHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/preview) */
export type PreviewLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/preview) */
export type PreviewProjectDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/preview) */
export type PreviewProjectHeadingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PreviewCollection = {
  __typename?: 'PreviewCollection';
  items: Array<Maybe<Preview>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PreviewFilter = {
  AND?: InputMaybe<Array<InputMaybe<PreviewFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PreviewFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  experienceDescription?: InputMaybe<Scalars['String']>;
  experienceDescription_contains?: InputMaybe<Scalars['String']>;
  experienceDescription_exists?: InputMaybe<Scalars['Boolean']>;
  experienceDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  experienceDescription_not?: InputMaybe<Scalars['String']>;
  experienceDescription_not_contains?: InputMaybe<Scalars['String']>;
  experienceDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  experienceHeading?: InputMaybe<Scalars['String']>;
  experienceHeading_contains?: InputMaybe<Scalars['String']>;
  experienceHeading_exists?: InputMaybe<Scalars['Boolean']>;
  experienceHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  experienceHeading_not?: InputMaybe<Scalars['String']>;
  experienceHeading_not_contains?: InputMaybe<Scalars['String']>;
  experienceHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  projectDescription?: InputMaybe<Scalars['String']>;
  projectDescription_contains?: InputMaybe<Scalars['String']>;
  projectDescription_exists?: InputMaybe<Scalars['Boolean']>;
  projectDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  projectDescription_not?: InputMaybe<Scalars['String']>;
  projectDescription_not_contains?: InputMaybe<Scalars['String']>;
  projectDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  projectHeading?: InputMaybe<Scalars['String']>;
  projectHeading_contains?: InputMaybe<Scalars['String']>;
  projectHeading_exists?: InputMaybe<Scalars['Boolean']>;
  projectHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  projectHeading_not?: InputMaybe<Scalars['String']>;
  projectHeading_not_contains?: InputMaybe<Scalars['String']>;
  projectHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PreviewLinkingCollections = {
  __typename?: 'PreviewLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PreviewLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PreviewOrder {
  ExperienceHeadingAsc = 'experienceHeading_ASC',
  ExperienceHeadingDesc = 'experienceHeading_DESC',
  ProjectHeadingAsc = 'projectHeading_ASC',
  ProjectHeadingDesc = 'projectHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Most valuable projects to date [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/project) */
export type Project = Entry & {
  __typename?: 'Project';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<ProjectLinkingCollections>;
  sys: Sys;
  technologies?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


/** Most valuable projects to date [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/project) */
export type ProjectDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Most valuable projects to date [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/project) */
export type ProjectImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Most valuable projects to date [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/project) */
export type ProjectLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Most valuable projects to date [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/project) */
export type ProjectTechnologiesArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Most valuable projects to date [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/project) */
export type ProjectTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Most valuable projects to date [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/project) */
export type ProjectUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ProjectCollection = {
  __typename?: 'ProjectCollection';
  items: Array<Maybe<Project>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ProjectFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  technologies_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  technologies_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  technologies_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  technologies_exists?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProjectLinkingCollections = {
  __typename?: 'ProjectLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ProjectLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ProjectOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type Query = {
  __typename?: 'Query';
  about?: Maybe<About>;
  aboutCollection?: Maybe<AboutCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  experience?: Maybe<Experience>;
  experienceCollection?: Maybe<ExperienceCollection>;
  icon?: Maybe<Icon>;
  iconCollection?: Maybe<IconCollection>;
  navigation?: Maybe<Navigation>;
  navigationCollection?: Maybe<NavigationCollection>;
  personalInfo?: Maybe<PersonalInfo>;
  personalInfoCollection?: Maybe<PersonalInfoCollection>;
  preview?: Maybe<Preview>;
  previewCollection?: Maybe<PreviewCollection>;
  project?: Maybe<Project>;
  projectCollection?: Maybe<ProjectCollection>;
  skill?: Maybe<Skill>;
  skillCollection?: Maybe<SkillCollection>;
  socialMedia?: Maybe<SocialMedia>;
  socialMediaCollection?: Maybe<SocialMediaCollection>;
  testimonial?: Maybe<Testimonial>;
  testimonialCollection?: Maybe<TestimonialCollection>;
  user?: Maybe<User>;
  userCollection?: Maybe<UserCollection>;
};


export type QueryAboutArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AboutOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AboutFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryExperienceArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ExperienceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ExperienceFilter>;
};


export type QueryIconArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryIconCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IconOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IconFilter>;
};


export type QueryNavigationArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationFilter>;
};


export type QueryPersonalInfoArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPersonalInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PersonalInfoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonalInfoFilter>;
};


export type QueryPreviewArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPreviewCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PreviewOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PreviewFilter>;
};


export type QueryProjectArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ProjectOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectFilter>;
};


export type QuerySkillArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySkillCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SkillOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SkillFilter>;
};


export type QuerySocialMediaArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySocialMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SocialMediaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SocialMediaFilter>;
};


export type QueryTestimonialArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTestimonialCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TestimonialOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TestimonialFilter>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryUserCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<UserOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserFilter>;
};

/** Technologies and tools I'm proficient in [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/skill) */
export type Skill = Entry & {
  __typename?: 'Skill';
  contentfulMetadata: ContentfulMetadata;
  isHardSkill?: Maybe<Scalars['Boolean']>;
  isOtherSkill?: Maybe<Scalars['Boolean']>;
  isSoftSkill?: Maybe<Scalars['Boolean']>;
  linkedFrom?: Maybe<SkillLinkingCollections>;
  sys: Sys;
  technology?: Maybe<Scalars['String']>;
  tool?: Maybe<Scalars['String']>;
};


/** Technologies and tools I'm proficient in [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/skill) */
export type SkillIsHardSkillArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Technologies and tools I'm proficient in [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/skill) */
export type SkillIsOtherSkillArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Technologies and tools I'm proficient in [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/skill) */
export type SkillIsSoftSkillArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Technologies and tools I'm proficient in [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/skill) */
export type SkillLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Technologies and tools I'm proficient in [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/skill) */
export type SkillTechnologyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Technologies and tools I'm proficient in [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/skill) */
export type SkillToolArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SkillCollection = {
  __typename?: 'SkillCollection';
  items: Array<Maybe<Skill>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SkillFilter = {
  AND?: InputMaybe<Array<InputMaybe<SkillFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SkillFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  isHardSkill?: InputMaybe<Scalars['Boolean']>;
  isHardSkill_exists?: InputMaybe<Scalars['Boolean']>;
  isHardSkill_not?: InputMaybe<Scalars['Boolean']>;
  isOtherSkill?: InputMaybe<Scalars['Boolean']>;
  isOtherSkill_exists?: InputMaybe<Scalars['Boolean']>;
  isOtherSkill_not?: InputMaybe<Scalars['Boolean']>;
  isSoftSkill?: InputMaybe<Scalars['Boolean']>;
  isSoftSkill_exists?: InputMaybe<Scalars['Boolean']>;
  isSoftSkill_not?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  technology?: InputMaybe<Scalars['String']>;
  technology_contains?: InputMaybe<Scalars['String']>;
  technology_exists?: InputMaybe<Scalars['Boolean']>;
  technology_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  technology_not?: InputMaybe<Scalars['String']>;
  technology_not_contains?: InputMaybe<Scalars['String']>;
  technology_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tool?: InputMaybe<Scalars['String']>;
  tool_contains?: InputMaybe<Scalars['String']>;
  tool_exists?: InputMaybe<Scalars['Boolean']>;
  tool_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  tool_not?: InputMaybe<Scalars['String']>;
  tool_not_contains?: InputMaybe<Scalars['String']>;
  tool_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SkillLinkingCollections = {
  __typename?: 'SkillLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SkillLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SkillOrder {
  IsHardSkillAsc = 'isHardSkill_ASC',
  IsHardSkillDesc = 'isHardSkill_DESC',
  IsOtherSkillAsc = 'isOtherSkill_ASC',
  IsOtherSkillDesc = 'isOtherSkill_DESC',
  IsSoftSkillAsc = 'isSoftSkill_ASC',
  IsSoftSkillDesc = 'isSoftSkill_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TechnologyAsc = 'technology_ASC',
  TechnologyDesc = 'technology_DESC',
  ToolAsc = 'tool_ASC',
  ToolDesc = 'tool_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/socialMedia) */
export type SocialMedia = Entry & {
  __typename?: 'SocialMedia';
  contentfulMetadata: ContentfulMetadata;
  icon?: Maybe<Asset>;
  linkedFrom?: Maybe<SocialMediaLinkingCollections>;
  sys: Sys;
  url?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/socialMedia) */
export type SocialMediaIconArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/socialMedia) */
export type SocialMediaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/socialMedia) */
export type SocialMediaUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SocialMediaCollection = {
  __typename?: 'SocialMediaCollection';
  items: Array<Maybe<SocialMedia>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SocialMediaFilter = {
  AND?: InputMaybe<Array<InputMaybe<SocialMediaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SocialMediaFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SocialMediaLinkingCollections = {
  __typename?: 'SocialMediaLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SocialMediaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SocialMediaOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** Testimonials to demonstrate credibility [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/testimonial) */
export type Testimonial = Entry & {
  __typename?: 'Testimonial';
  author?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TestimonialLinkingCollections>;
  sys: Sys;
  text?: Maybe<Scalars['String']>;
};


/** Testimonials to demonstrate credibility [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/testimonial) */
export type TestimonialAuthorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Testimonials to demonstrate credibility [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/testimonial) */
export type TestimonialLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Testimonials to demonstrate credibility [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/testimonial) */
export type TestimonialTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TestimonialCollection = {
  __typename?: 'TestimonialCollection';
  items: Array<Maybe<Testimonial>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TestimonialFilter = {
  AND?: InputMaybe<Array<InputMaybe<TestimonialFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TestimonialFilter>>>;
  author?: InputMaybe<Scalars['String']>;
  author_contains?: InputMaybe<Scalars['String']>;
  author_exists?: InputMaybe<Scalars['Boolean']>;
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  author_not?: InputMaybe<Scalars['String']>;
  author_not_contains?: InputMaybe<Scalars['String']>;
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']>;
  text_contains?: InputMaybe<Scalars['String']>;
  text_exists?: InputMaybe<Scalars['Boolean']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  text_not?: InputMaybe<Scalars['String']>;
  text_not_contains?: InputMaybe<Scalars['String']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TestimonialLinkingCollections = {
  __typename?: 'TestimonialLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TestimonialLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TestimonialOrder {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/user) */
export type User = Entry & {
  __typename?: 'User';
  about?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  cv?: Maybe<Asset>;
  linkedFrom?: Maybe<UserLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<Asset>;
  role?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/user) */
export type UserAboutArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/user) */
export type UserCvArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/user) */
export type UserLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/user) */
export type UserNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/user) */
export type UserProfilePictureArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/user) */
export type UserRoleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/6lbi1puzqh8m/content_types/user) */
export type UserSummaryArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type UserCollection = {
  __typename?: 'UserCollection';
  items: Array<Maybe<User>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type UserFilter = {
  AND?: InputMaybe<Array<InputMaybe<UserFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UserFilter>>>;
  about?: InputMaybe<Scalars['String']>;
  about_contains?: InputMaybe<Scalars['String']>;
  about_exists?: InputMaybe<Scalars['Boolean']>;
  about_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  about_not?: InputMaybe<Scalars['String']>;
  about_not_contains?: InputMaybe<Scalars['String']>;
  about_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cv_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  profilePicture_exists?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Scalars['String']>;
  role_contains?: InputMaybe<Scalars['String']>;
  role_exists?: InputMaybe<Scalars['Boolean']>;
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  role_not?: InputMaybe<Scalars['String']>;
  role_not_contains?: InputMaybe<Scalars['String']>;
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  summary?: InputMaybe<Scalars['String']>;
  summary_contains?: InputMaybe<Scalars['String']>;
  summary_exists?: InputMaybe<Scalars['Boolean']>;
  summary_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  summary_not?: InputMaybe<Scalars['String']>;
  summary_not_contains?: InputMaybe<Scalars['String']>;
  summary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type UserLinkingCollections = {
  __typename?: 'UserLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type UserLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum UserOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  SummaryAsc = 'summary_ASC',
  SummaryDesc = 'summary_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type GetNavigationQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
}>;


export type GetNavigationQuery = { __typename?: 'Query', navigationCollection?: { __typename?: 'NavigationCollection', items: Array<{ __typename?: 'Navigation', title?: string | null, pathname?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type GetUserQueryVariables = Exact<{
  userId: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', name?: string | null, role?: string | null, summary?: string | null, profilePicture?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, cv?: { __typename?: 'Asset', url?: string | null } | null } | null };

export type GetExpPreviewQueryVariables = Exact<{
  previewId: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
}>;


export type GetExpPreviewQuery = { __typename?: 'Query', preview?: { __typename?: 'Preview', experienceHeading?: string | null, experienceDescription?: string | null } | null };

export type GetAllExpsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
}>;


export type GetAllExpsQuery = { __typename?: 'Query', experienceCollection?: { __typename?: 'ExperienceCollection', items: Array<{ __typename?: 'Experience', jobTitle?: string | null, companyName?: string | null, timeWorked?: string | null, sys: { __typename?: 'Sys', id: string, publishedAt?: any | null }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null, name?: string | null } | null> }, description?: { __typename?: 'ExperienceDescription', json: any } | null, companyLogo?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };

export type GetPersonalInfoQueryVariables = Exact<{
  personId: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
}>;


export type GetPersonalInfoQuery = { __typename?: 'Query', personalInfo?: { __typename?: 'PersonalInfo', title?: string | null, name?: string | null, bio?: string | null, location?: string | null, email?: string | null, linkedin?: string | null, github?: string | null, sys: { __typename?: 'Sys', id: string }, headshot?: { __typename?: 'Asset', url?: string | null } | null } | null };

export type GetProjectsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
}>;


export type GetProjectsQuery = { __typename?: 'Query', projectCollection?: { __typename?: 'ProjectCollection', items: Array<{ __typename?: 'Project', title?: string | null, description?: string | null, technologies?: Array<string | null> | null, url?: string | null, image?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };

export type GetAllSkillsQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
}>;


export type GetAllSkillsQuery = { __typename?: 'Query', skillCollection?: { __typename?: 'SkillCollection', items: Array<{ __typename?: 'Skill', technology?: string | null, isHardSkill?: boolean | null, isOtherSkill?: boolean | null, isSoftSkill?: boolean | null } | null> } | null };


export const GetNavigationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNavigation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigationCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"EnumValue","value":"sys_publishedAt_ASC"}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"pathname"}}]}}]}}]}}]} as unknown as DocumentNode<GetNavigationQuery, GetNavigationQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cv"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetExpPreviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetExpPreview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"previewId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"preview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"previewId"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experienceHeading"}},{"kind":"Field","name":{"kind":"Name","value":"experienceDescription"}}]}}]}}]} as unknown as DocumentNode<GetExpPreviewQuery, GetExpPreviewQueryVariables>;
export const GetAllExpsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllExps"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experienceCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"EnumValue","value":"sys_firstPublishedAt_ASC"}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contentfulMetadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timeWorked"}},{"kind":"Field","name":{"kind":"Name","value":"companyLogo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllExpsQuery, GetAllExpsQueryVariables>;
export const GetPersonalInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersonalInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personalInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personId"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"headshot"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"linkedin"}},{"kind":"Field","name":{"kind":"Name","value":"github"}}]}}]}}]} as unknown as DocumentNode<GetPersonalInfoQuery, GetPersonalInfoQueryVariables>;
export const GetProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjects"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"technologies"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectsQuery, GetProjectsQueryVariables>;
export const GetAllSkillsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllSkills"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skillCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"technology"}},{"kind":"Field","name":{"kind":"Name","value":"isHardSkill"}},{"kind":"Field","name":{"kind":"Name","value":"isOtherSkill"}},{"kind":"Field","name":{"kind":"Name","value":"isSoftSkill"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllSkillsQuery, GetAllSkillsQueryVariables>;