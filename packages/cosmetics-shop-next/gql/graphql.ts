/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) country code. */
  Commercetools_Country: { input: any; output: any; }
  /** Represents a currency. Currencies are identified by their [ISO 4217](http://www.iso.org/iso/home/standards/currency_codes.htm) currency codes. */
  Commercetools_Currency: { input: any; output: any; }
  /** Locale is a scalar value represented as a string language tag. */
  Commercetools_Locale: { input: any; output: any; }
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Commercetools_Long: { input: any; output: any; }
  /** A set. */
  Commercetools_Set: { input: any; output: any; }
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  /** Raw JSON value */
  Json: { input: any; output: any; }
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  /** Slate-compatible RichText AST */
  RichTextAST: { input: any; output: any; }
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Entity & Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String']['output'];
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  imageProductFocus: Array<ProductFocus>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>;
  ogImagePage: Array<Page>;
  ogImagePdp: Array<Pdp>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImageProductFocusArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductFocusOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFocusWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetOgImagePageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


/** Asset system model */
export type AssetOgImagePdpArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PdpOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PdpWhereInput>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  imageCard?: InputMaybe<CardCreateManyInlineInput>;
  imageEditorial?: InputMaybe<EditorialCreateManyInlineInput>;
  imageHero?: InputMaybe<HeroCreateManyInlineInput>;
  imageProductFocus?: InputMaybe<ProductFocusCreateManyInlineInput>;
  imageRoutine?: InputMaybe<RoutineCreateManyInlineInput>;
  imageTutorial?: InputMaybe<TutorialCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  ogImagePage?: InputMaybe<PageCreateManyInlineInput>;
  ogImagePdp?: InputMaybe<PdpCreateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imageProductFocus_every?: InputMaybe<ProductFocusWhereInput>;
  imageProductFocus_none?: InputMaybe<ProductFocusWhereInput>;
  imageProductFocus_some?: InputMaybe<ProductFocusWhereInput>;
  ogImagePage_every?: InputMaybe<PageWhereInput>;
  ogImagePage_none?: InputMaybe<PageWhereInput>;
  ogImagePage_some?: InputMaybe<PageWhereInput>;
  ogImagePdp_every?: InputMaybe<PdpWhereInput>;
  ogImagePdp_none?: InputMaybe<PdpWhereInput>;
  ogImagePdp_some?: InputMaybe<PdpWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  imageCard?: InputMaybe<CardUpdateManyInlineInput>;
  imageEditorial?: InputMaybe<EditorialUpdateManyInlineInput>;
  imageHero?: InputMaybe<HeroUpdateManyInlineInput>;
  imageProductFocus?: InputMaybe<ProductFocusUpdateManyInlineInput>;
  imageRoutine?: InputMaybe<RoutineUpdateManyInlineInput>;
  imageTutorial?: InputMaybe<TutorialUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  ogImagePage?: InputMaybe<PageUpdateManyInlineInput>;
  ogImagePdp?: InputMaybe<PdpUpdateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imageProductFocus_every?: InputMaybe<ProductFocusWhereInput>;
  imageProductFocus_none?: InputMaybe<ProductFocusWhereInput>;
  imageProductFocus_some?: InputMaybe<ProductFocusWhereInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  ogImagePage_every?: InputMaybe<PageWhereInput>;
  ogImagePage_none?: InputMaybe<PageWhereInput>;
  ogImagePage_some?: InputMaybe<PageWhereInput>;
  ogImagePdp_every?: InputMaybe<PdpWhereInput>;
  ogImagePdp_none?: InputMaybe<PdpWhereInput>;
  ogImagePdp_some?: InputMaybe<PdpWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
};

export type Card = Entity & {
  __typename?: 'Card';
  cta?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Card>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type CardImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CardLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};

export type CardConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CardWhereUniqueInput;
};

/** A connection to a list of items. */
export type CardConnection = {
  __typename?: 'CardConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CardEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CardCreateInput = {
  /** cta input for default locale (en) */
  cta?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<CardCreateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  /** url input for default locale (en) */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CardCreateLocalizationDataInput = {
  cta?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CardCreateLocalizationInput = {
  /** Localization input */
  data: CardCreateLocalizationDataInput;
  locale: Locale;
};

export type CardCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<CardCreateLocalizationInput>>;
};

export type CardCreateManyInlineInput = {
  /** Create and connect multiple existing Card documents */
  create?: InputMaybe<Array<CardCreateInput>>;
};

export type CardCreateOneInlineInput = {
  /** Create and connect one Card document */
  create?: InputMaybe<CardCreateInput>;
};

export type CardCreateWithPositionInput = {
  /** Document to create */
  data: CardCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CardEdge = {
  __typename?: 'CardEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Card;
};

/** Identifies documents */
export type CardManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CardWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CardWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CardWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
};

export enum CardOrderByInput {
  CtaAsc = 'cta_ASC',
  CtaDesc = 'cta_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type CardParent = Editorial;

export type CardParentConnectInput = {
  Editorial?: InputMaybe<EditorialConnectInput>;
};

export type CardParentCreateInput = {
  Editorial?: InputMaybe<EditorialCreateInput>;
};

export type CardParentCreateManyInlineInput = {
  /** Create and connect multiple existing CardParent documents */
  create?: InputMaybe<Array<CardParentCreateInput>>;
};

export type CardParentCreateOneInlineInput = {
  /** Create and connect one CardParent document */
  create?: InputMaybe<CardParentCreateInput>;
};

export type CardParentCreateWithPositionInput = {
  Editorial?: InputMaybe<EditorialCreateWithPositionInput>;
};

export type CardParentUpdateInput = {
  Editorial?: InputMaybe<EditorialUpdateInput>;
};

export type CardParentUpdateManyInlineInput = {
  /** Create and connect multiple CardParent component instances */
  create?: InputMaybe<Array<CardParentCreateWithPositionInput>>;
  /** Delete multiple CardParent documents */
  delete?: InputMaybe<Array<CardParentWhereUniqueInput>>;
  /** Update multiple CardParent component instances */
  update?: InputMaybe<Array<CardParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple CardParent component instances */
  upsert?: InputMaybe<Array<CardParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CardParentUpdateManyWithNestedWhereInput = {
  Editorial?: InputMaybe<EditorialUpdateManyWithNestedWhereInput>;
};

export type CardParentUpdateOneInlineInput = {
  /** Create and connect one CardParent document */
  create?: InputMaybe<CardParentCreateInput>;
  /** Delete currently connected CardParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CardParent document */
  update?: InputMaybe<CardParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CardParent document */
  upsert?: InputMaybe<CardParentUpsertWithNestedWhereUniqueInput>;
};

export type CardParentUpdateWithNestedWhereUniqueAndPositionInput = {
  Editorial?: InputMaybe<EditorialUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type CardParentUpdateWithNestedWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialUpdateWithNestedWhereUniqueInput>;
};

export type CardParentUpsertWithNestedWhereUniqueAndPositionInput = {
  Editorial?: InputMaybe<EditorialUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type CardParentUpsertWithNestedWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialUpsertWithNestedWhereUniqueInput>;
};

export type CardParentWhereInput = {
  Editorial?: InputMaybe<EditorialWhereInput>;
};

export type CardParentWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialWhereUniqueInput>;
};

export type CardUpdateInput = {
  /** cta input for default locale (en) */
  cta?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<CardUpdateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  /** url input for default locale (en) */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CardUpdateLocalizationDataInput = {
  cta?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CardUpdateLocalizationInput = {
  data: CardUpdateLocalizationDataInput;
  locale: Locale;
};

export type CardUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<CardCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<CardUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<CardUpsertLocalizationInput>>;
};

export type CardUpdateManyInlineInput = {
  /** Create and connect multiple Card component instances */
  create?: InputMaybe<Array<CardCreateWithPositionInput>>;
  /** Delete multiple Card documents */
  delete?: InputMaybe<Array<CardWhereUniqueInput>>;
  /** Update multiple Card component instances */
  update?: InputMaybe<Array<CardUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Card component instances */
  upsert?: InputMaybe<Array<CardUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CardUpdateManyInput = {
  /** cta input for default locale (en) */
  cta?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<CardUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  /** url input for default locale (en) */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CardUpdateManyLocalizationDataInput = {
  cta?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CardUpdateManyLocalizationInput = {
  data: CardUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type CardUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<CardUpdateManyLocalizationInput>>;
};

export type CardUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CardUpdateManyInput;
  /** Document search */
  where: CardWhereInput;
};

export type CardUpdateOneInlineInput = {
  /** Create and connect one Card document */
  create?: InputMaybe<CardCreateInput>;
  /** Delete currently connected Card document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Card document */
  update?: InputMaybe<CardUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Card document */
  upsert?: InputMaybe<CardUpsertWithNestedWhereUniqueInput>;
};

export type CardUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<CardUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CardWhereUniqueInput;
};

export type CardUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CardUpdateInput;
  /** Unique document search */
  where: CardWhereUniqueInput;
};

export type CardUpsertInput = {
  /** Create document if it didn't exist */
  create: CardCreateInput;
  /** Update document if it exists */
  update: CardUpdateInput;
};

export type CardUpsertLocalizationInput = {
  create: CardCreateLocalizationDataInput;
  locale: Locale;
  update: CardUpdateLocalizationDataInput;
};

export type CardUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<CardUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CardWhereUniqueInput;
};

export type CardUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CardUpsertInput;
  /** Unique document search */
  where: CardWhereUniqueInput;
};

/** Identifies documents */
export type CardWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CardWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CardWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CardWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  cta_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  cta_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  cta_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cta_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  cta_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  cta_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  cta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  cta_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  cta_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Card record uniquely */
export type CardWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type Commercetools_AwsLambdaDestination = Commercetools_ExtensionDestination & {
  __typename?: 'Commercetools_AWSLambdaDestination';
  accessKey: Scalars['String']['output'];
  accessSecret: Scalars['String']['output'];
  arn: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_AbsoluteDiscountValue = Commercetools_CartDiscountValue & Commercetools_ProductDiscountValue & {
  __typename?: 'Commercetools_AbsoluteDiscountValue';
  money: Array<Commercetools_Money>;
  type: Scalars['String']['output'];
};

export enum Commercetools_ActionType {
  Create = 'Create',
  Update = 'Update'
}

export type Commercetools_AddStagedOrderCustomLineItemOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_AddStagedOrderCustomLineItemOutput';
  draft: Commercetools_CustomLineItemDraftOutput;
  type: Scalars['String']['output'];
};

export type Commercetools_AddStagedOrderDeliveryOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_AddStagedOrderDeliveryOutput';
  address?: Maybe<Commercetools_AddressDraft>;
  custom?: Maybe<Commercetools_CustomFieldsCommand>;
  deliveryKey?: Maybe<Scalars['String']['output']>;
  items: Array<Commercetools_DeliveryItem>;
  parcels: Array<Commercetools_ParcelData>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_AddStagedOrderDiscountCodeOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_AddStagedOrderDiscountCodeOutput';
  code: Scalars['String']['output'];
  type: Scalars['String']['output'];
  validateDuplicates: Scalars['Boolean']['output'];
};

export type Commercetools_AddStagedOrderItemShippingAddressOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_AddStagedOrderItemShippingAddressOutput';
  address: Commercetools_AddressDraft;
  type: Scalars['String']['output'];
};

export type Commercetools_AddStagedOrderLineItemOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_AddStagedOrderLineItemOutput';
  draft: Commercetools_LineItemDraftOutput;
  type: Scalars['String']['output'];
};

export type Commercetools_AddStagedOrderParcelToDeliveryOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_AddStagedOrderParcelToDeliveryOutput';
  custom?: Maybe<Commercetools_CustomFieldsCommand>;
  deliveryId?: Maybe<Scalars['String']['output']>;
  deliveryKey?: Maybe<Scalars['String']['output']>;
  items: Array<Commercetools_DeliveryItem>;
  measurements?: Maybe<Commercetools_ParcelMeasurements>;
  parcelKey?: Maybe<Scalars['String']['output']>;
  trackingData?: Maybe<Commercetools_TrackingData>;
  type: Scalars['String']['output'];
};

export type Commercetools_AddStagedOrderPaymentOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_AddStagedOrderPaymentOutput';
  paymentResId: Commercetools_ResourceIdentifier;
  type: Scalars['String']['output'];
};

export type Commercetools_AddStagedOrderReturnInfoOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_AddStagedOrderReturnInfoOutput';
  items: Array<Commercetools_ReturnItemDraftTypeOutput>;
  returnDate?: Maybe<Scalars['DateTime']['output']>;
  returnTrackingId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_AddStagedOrderShoppingListOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_AddStagedOrderShoppingListOutput';
  distributionChannelResId?: Maybe<Commercetools_ChannelReferenceIdentifier>;
  shoppingListResId: Commercetools_ResourceIdentifier;
  supplyChannelResId?: Maybe<Commercetools_ChannelReferenceIdentifier>;
  type: Scalars['String']['output'];
};

/** An address represents a postal address. */
export type Commercetools_Address = {
  __typename?: 'Commercetools_Address';
  additionalAddressInfo?: Maybe<Scalars['String']['output']>;
  additionalStreetInfo?: Maybe<Scalars['String']['output']>;
  apartment?: Maybe<Scalars['String']['output']>;
  building?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country: Scalars['Commercetools_Country']['output'];
  custom?: Maybe<Commercetools_CustomFieldsType>;
  department?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  pOBox?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  salutation?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  streetName?: Maybe<Scalars['String']['output']>;
  streetNumber?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Commercetools_AddressDraft = {
  __typename?: 'Commercetools_AddressDraft';
  additionalAddressInfo?: Maybe<Scalars['String']['output']>;
  additionalStreetInfo?: Maybe<Scalars['String']['output']>;
  apartment?: Maybe<Scalars['String']['output']>;
  building?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country: Scalars['Commercetools_Country']['output'];
  custom?: Maybe<Commercetools_CustomFieldsCommand>;
  department?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  pOBox?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  salutation?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  streetName?: Maybe<Scalars['String']['output']>;
  streetNumber?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Commercetools_Applied = Commercetools_OrderEditResult & {
  __typename?: 'Commercetools_Applied';
  appliedAt: Scalars['DateTime']['output'];
  excerptAfterEdit: Commercetools_OrderExcerpt;
  excerptBeforeEdit: Commercetools_OrderExcerpt;
  type: Scalars['String']['output'];
};

export type Commercetools_ApprovalFlow = Commercetools_Versioned & {
  __typename?: 'Commercetools_ApprovalFlow';
  approvals: Array<Commercetools_ApprovalFlowApproval>;
  businessUnit: Commercetools_BusinessUnit;
  businessUnitRef: Commercetools_KeyReference;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  currentTierPendingApprovers: Array<Commercetools_RuleApprover>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  eligibleApprovers: Array<Commercetools_RuleApprover>;
  id: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  order?: Maybe<Commercetools_Order>;
  orderRef: Commercetools_Reference;
  pendingApprovers: Array<Commercetools_RuleApprover>;
  rejection?: Maybe<Commercetools_ApprovalFlowRejection>;
  rules: Array<Commercetools_ApprovalRule>;
  status: Scalars['String']['output'];
  version: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_ApprovalFlowApproval = {
  __typename?: 'Commercetools_ApprovalFlowApproval';
  approvedAt: Scalars['DateTime']['output'];
  approver: Commercetools_Associate;
};

export type Commercetools_ApprovalFlowApproved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ApprovalFlowApproved';
  associate?: Maybe<Commercetools_Customer>;
  associateRef?: Maybe<Commercetools_Reference>;
  order?: Maybe<Commercetools_Order>;
  orderRef?: Maybe<Commercetools_Reference>;
  type: Scalars['String']['output'];
};

export type Commercetools_ApprovalFlowCompleted = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ApprovalFlowCompleted';
  order?: Maybe<Commercetools_Order>;
  orderRef?: Maybe<Commercetools_Reference>;
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_ApprovalFlowCreated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ApprovalFlowCreated';
  approvalFlow: Commercetools_ApprovalFlow;
  type: Scalars['String']['output'];
};

export type Commercetools_ApprovalFlowRejected = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ApprovalFlowRejected';
  associate?: Maybe<Commercetools_Customer>;
  associateRef?: Maybe<Commercetools_Reference>;
  order?: Maybe<Commercetools_Order>;
  orderRef?: Maybe<Commercetools_Reference>;
  rejectionReason?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_ApprovalFlowRejection = {
  __typename?: 'Commercetools_ApprovalFlowRejection';
  reason?: Maybe<Scalars['String']['output']>;
  rejectedAt: Scalars['DateTime']['output'];
  rejecter: Commercetools_Associate;
};

export type Commercetools_ApprovalRule = Commercetools_Versioned & {
  __typename?: 'Commercetools_ApprovalRule';
  approvers: Commercetools_ApproverHierarchy;
  businessUnit: Commercetools_BusinessUnit;
  businessUnitRef: Commercetools_KeyReference;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  name: Scalars['String']['output'];
  predicate: Scalars['String']['output'];
  requesters: Array<Commercetools_RuleRequester>;
  status: Commercetools_ApprovalRuleStatus;
  version: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_ApprovalRuleApproversSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ApprovalRuleApproversSet';
  approvers: Commercetools_ApproverHierarchy;
  oldApprovers: Commercetools_ApproverHierarchy;
  type: Scalars['String']['output'];
};

export type Commercetools_ApprovalRuleCreated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ApprovalRuleCreated';
  approvalRule: Commercetools_ApprovalRule;
  type: Scalars['String']['output'];
};

export type Commercetools_ApprovalRuleDescriptionSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ApprovalRuleDescriptionSet';
  description?: Maybe<Scalars['String']['output']>;
  oldDescription?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_ApprovalRuleKeySet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ApprovalRuleKeySet';
  key?: Maybe<Scalars['String']['output']>;
  oldKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_ApprovalRuleNameSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ApprovalRuleNameSet';
  name: Scalars['String']['output'];
  oldName: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_ApprovalRulePredicateSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ApprovalRulePredicateSet';
  oldPredicate: Scalars['String']['output'];
  predicate: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_ApprovalRuleRequestersSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ApprovalRuleRequestersSet';
  oldRequesters: Array<Commercetools_RuleRequester>;
  requesters: Array<Commercetools_RuleRequester>;
  type: Scalars['String']['output'];
};

export enum Commercetools_ApprovalRuleStatus {
  Active = 'Active',
  Inactive = 'Inactive'
}

export type Commercetools_ApprovalRuleStatusSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ApprovalRuleStatusSet';
  oldStatus: Commercetools_ApprovalRuleStatus;
  status: Commercetools_ApprovalRuleStatus;
  type: Scalars['String']['output'];
};

export type Commercetools_ApproverConjunction = {
  __typename?: 'Commercetools_ApproverConjunction';
  and: Array<Commercetools_ApproverDisjunction>;
};

export type Commercetools_ApproverDisjunction = {
  __typename?: 'Commercetools_ApproverDisjunction';
  or: Array<Commercetools_RuleApprover>;
};

export type Commercetools_ApproverHierarchy = {
  __typename?: 'Commercetools_ApproverHierarchy';
  tiers: Array<Commercetools_ApproverConjunction>;
};

export type Commercetools_Asset = {
  __typename?: 'Commercetools_Asset';
  custom?: Maybe<Commercetools_CustomFieldsType>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<Commercetools_LocalizedString>;
  sources: Array<Commercetools_AssetSource>;
  tags: Array<Scalars['String']['output']>;
};


export type Commercetools_AssetDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_AssetNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_AssetDimensions = {
  __typename?: 'Commercetools_AssetDimensions';
  height: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};

export type Commercetools_AssetSource = {
  __typename?: 'Commercetools_AssetSource';
  contentType?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<Commercetools_AssetDimensions>;
  key?: Maybe<Scalars['String']['output']>;
  uri: Scalars['String']['output'];
};

export type Commercetools_Associate = {
  __typename?: 'Commercetools_Associate';
  associateRoleAssignments: Array<Commercetools_AssociateRoleAssignment>;
  customer?: Maybe<Commercetools_Customer>;
  customerRef?: Maybe<Commercetools_Reference>;
};

export enum Commercetools_AssociateInheritanceMode {
  Disabled = 'Disabled',
  Enabled = 'Enabled'
}

export type Commercetools_AssociateRole = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_AssociateRole';
  buyerAssignable: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  name?: Maybe<Scalars['String']['output']>;
  permissions: Array<Commercetools_Permission>;
  version: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_AssociateRoleAssignment = {
  __typename?: 'Commercetools_AssociateRoleAssignment';
  associateRole: Commercetools_AssociateRole;
  associateRoleRef?: Maybe<Commercetools_KeyReference>;
  inheritance: Commercetools_AssociateInheritanceMode;
};

export type Commercetools_AssociateRoleBuyerAssignableChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_AssociateRoleBuyerAssignableChanged';
  buyerAssignable: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_AssociateRoleCreated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_AssociateRoleCreated';
  associateRole: Commercetools_AssociateRole;
  type: Scalars['String']['output'];
};

export type Commercetools_AssociateRoleDeleted = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_AssociateRoleDeleted';
  type: Scalars['String']['output'];
};

export type Commercetools_AssociateRoleNameSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_AssociateRoleNameSet';
  name?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_AssociateRolePermissionAdded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_AssociateRolePermissionAdded';
  permission: Commercetools_Permission;
  type: Scalars['String']['output'];
};

export type Commercetools_AssociateRolePermissionRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_AssociateRolePermissionRemoved';
  permission: Commercetools_Permission;
  type: Scalars['String']['output'];
};

export type Commercetools_AssociateRolePermissionsSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_AssociateRolePermissionsSet';
  permissions?: Maybe<Array<Commercetools_Permission>>;
  type: Scalars['String']['output'];
};

export enum Commercetools_AttributeConstraint {
  /** A set of attributes, that have this constraint, should have different combinations in each variant */
  CombinationUnique = 'CombinationUnique',
  /** No constraints are applied to the attribute */
  None = 'None',
  /** Attribute value should be the same in all variants */
  SameForAll = 'SameForAll',
  /** Attribute value should be different in each variant */
  Unique = 'Unique'
}

export type Commercetools_AttributeDefinition = {
  __typename?: 'Commercetools_AttributeDefinition';
  attributeConstraint: Commercetools_AttributeConstraint;
  inputHint: Commercetools_TextInputHint;
  inputTip?: Maybe<Scalars['String']['output']>;
  inputTipAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  isRequired: Scalars['Boolean']['output'];
  isSearchable: Scalars['Boolean']['output'];
  label?: Maybe<Scalars['String']['output']>;
  labelAllLocales: Array<Commercetools_LocalizedString>;
  name: Scalars['String']['output'];
  type: Commercetools_AttributeDefinitionType;
};


export type Commercetools_AttributeDefinitionInputTipArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_AttributeDefinitionLabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_AttributeDefinitionResult = {
  __typename?: 'Commercetools_AttributeDefinitionResult';
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  results: Array<Commercetools_AttributeDefinition>;
  total: Scalars['Int']['output'];
};

/** (https://docs.commercetools.com/api/projects/productTypes#attributetype)[https://docs.commercetools.com/api/projects/productTypes#attributetype] */
export type Commercetools_AttributeDefinitionType = {
  name: Scalars['String']['output'];
};

export type Commercetools_AttributeGroup = Commercetools_Versioned & {
  __typename?: 'Commercetools_AttributeGroup';
  attributes: Array<Commercetools_AttributeReference>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<Commercetools_LocalizedString>;
  version: Scalars['Commercetools_Long']['output'];
};


export type Commercetools_AttributeGroupDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_AttributeGroupNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_AttributeReference = {
  __typename?: 'Commercetools_AttributeReference';
  key: Scalars['String']['output'];
};

export type Commercetools_Attribution = {
  __typename?: 'Commercetools_Attribution';
  clientId?: Maybe<Scalars['String']['output']>;
  source: Commercetools_AttributionSource;
  userRef?: Maybe<Commercetools_Reference>;
};

export enum Commercetools_AttributionSource {
  Export = 'Export',
  Import = 'Import'
}

/** AuthenticationMode values. */
export enum Commercetools_AuthenticationMode {
  ExternalAuth = 'ExternalAuth',
  Password = 'Password'
}

export type Commercetools_AuthorizationHeader = Commercetools_HttpDestinationAuthentication & {
  __typename?: 'Commercetools_AuthorizationHeader';
  headerValue: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export enum Commercetools_AwsAuthenticationMode {
  Credentials = 'Credentials',
  Iam = 'IAM'
}

export type Commercetools_AzureFunctionsAuthentication = Commercetools_HttpDestinationAuthentication & {
  __typename?: 'Commercetools_AzureFunctionsAuthentication';
  key: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_AzureServiceBusDestination = Commercetools_Destination & {
  __typename?: 'Commercetools_AzureServiceBusDestination';
  connectionString: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_BaseMoney = {
  centAmount: Scalars['Commercetools_Long']['output'];
  currencyCode: Scalars['Commercetools_Currency']['output'];
  fractionDigits: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_BooleanAttributeDefinitionType = Commercetools_AttributeDefinitionType & {
  __typename?: 'Commercetools_BooleanAttributeDefinitionType';
  name: Scalars['String']['output'];
};

export type Commercetools_BooleanType = Commercetools_FieldType & {
  __typename?: 'Commercetools_BooleanType';
  name: Scalars['String']['output'];
};

export type Commercetools_BusinessUnit = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_BusinessUnit';
  addresses: Array<Commercetools_Address>;
  /** This field contains the BusinessUnits KeyReferences from the Company to the parent Division of this BusinessUnit in that order. */
  ancestors: Array<Commercetools_BusinessUnit>;
  approvalRuleMode?: Maybe<Commercetools_BusinessUnitApprovalRuleMode>;
  associateMode: Commercetools_BusinessUnitAssociateMode;
  associates: Array<Commercetools_Associate>;
  billingAddressIds: Array<Scalars['String']['output']>;
  billingAddresses: Array<Commercetools_Address>;
  contactEmail?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  defaultBillingAddress?: Maybe<Commercetools_Address>;
  defaultBillingAddressId?: Maybe<Scalars['String']['output']>;
  defaultShippingAddress?: Maybe<Commercetools_Address>;
  defaultShippingAddressId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  inheritedAssociates?: Maybe<Array<Commercetools_InheritedAssociate>>;
  /** This field contains the inherited stores from its parentUnit if storeMode is set to FromParent. */
  inheritedStores?: Maybe<Array<Commercetools_InheritedStore>>;
  key: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  name: Scalars['String']['output'];
  parentUnit?: Maybe<Commercetools_BusinessUnit>;
  parentUnitRef?: Maybe<Commercetools_KeyReference>;
  shippingAddressIds: Array<Scalars['String']['output']>;
  shippingAddresses: Array<Commercetools_Address>;
  status: Commercetools_BusinessUnitStatus;
  storeMode?: Maybe<Scalars['String']['output']>;
  stores?: Maybe<Array<Commercetools_Store>>;
  storesRef?: Maybe<Array<Commercetools_KeyReference>>;
  topLevelUnit: Commercetools_BusinessUnit;
  topLevelUnitRef?: Maybe<Commercetools_KeyReference>;
  unitType: Commercetools_BusinessUnitType;
  version: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_BusinessUnitAddressAdded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitAddressAdded';
  address: Commercetools_Address;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitAddressChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitAddressChanged';
  address: Commercetools_Address;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitAddressCustomFieldAdded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitAddressCustomFieldAdded';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type Commercetools_BusinessUnitAddressCustomFieldChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitAddressCustomFieldChanged';
  name: Scalars['String']['output'];
  oldValue?: Maybe<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type Commercetools_BusinessUnitAddressCustomFieldRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitAddressCustomFieldRemoved';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitAddressCustomTypeRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitAddressCustomTypeRemoved';
  oldTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitAddressCustomTypeSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitAddressCustomTypeSet';
  customFields: Commercetools_CustomFieldsType;
  oldTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitAddressRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitAddressRemoved';
  address: Commercetools_Address;
  type: Scalars['String']['output'];
};

export enum Commercetools_BusinessUnitApprovalRuleMode {
  Explicit = 'Explicit',
  ExplicitAndFromParent = 'ExplicitAndFromParent'
}

export type Commercetools_BusinessUnitApprovalRuleModeChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitApprovalRuleModeChanged';
  approvalRuleMode: Commercetools_BusinessUnitApprovalRuleMode;
  oldApprovalRuleMode?: Maybe<Commercetools_BusinessUnitApprovalRuleMode>;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitAssociateAdded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitAssociateAdded';
  associate: Commercetools_Associate;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitAssociateChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitAssociateChanged';
  associate: Commercetools_Associate;
  type: Scalars['String']['output'];
};

export enum Commercetools_BusinessUnitAssociateMode {
  Explicit = 'Explicit',
  ExplicitAndFromParent = 'ExplicitAndFromParent'
}

export type Commercetools_BusinessUnitAssociateModeChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitAssociateModeChanged';
  associateMode: Commercetools_BusinessUnitAssociateMode;
  oldAssociateMode?: Maybe<Commercetools_BusinessUnitAssociateMode>;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitAssociateRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitAssociateRemoved';
  associate: Commercetools_Associate;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitAssociatesSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitAssociatesSet';
  associates: Array<Commercetools_Associate>;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitBillingAddressAdded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitBillingAddressAdded';
  address: Commercetools_Address;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitBillingAddressRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitBillingAddressRemoved';
  address: Commercetools_Address;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitContactEmailSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitContactEmailSet';
  contactEmail?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitCreated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitCreated';
  businessUnit: Commercetools_BusinessUnit;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitCustomFieldAdded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitCustomFieldAdded';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type Commercetools_BusinessUnitCustomFieldChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitCustomFieldChanged';
  name: Scalars['String']['output'];
  oldValue?: Maybe<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type Commercetools_BusinessUnitCustomFieldRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitCustomFieldRemoved';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitCustomTypeRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitCustomTypeRemoved';
  oldTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitCustomTypeSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitCustomTypeSet';
  customFields: Commercetools_CustomFieldsType;
  oldTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitDefaultBillingAddressSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitDefaultBillingAddressSet';
  address?: Maybe<Commercetools_Address>;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitDefaultShippingAddressSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitDefaultShippingAddressSet';
  address?: Maybe<Commercetools_Address>;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitDeleted = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitDeleted';
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitNameChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitNameChanged';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitParentChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitParentChanged';
  newParentUnit?: Maybe<Commercetools_BusinessUnit>;
  newParentUnitRef?: Maybe<Commercetools_KeyReference>;
  oldParentUnit?: Maybe<Commercetools_BusinessUnit>;
  oldParentUnitRef?: Maybe<Commercetools_KeyReference>;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitShippingAddressAdded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitShippingAddressAdded';
  address: Commercetools_Address;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitShippingAddressRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitShippingAddressRemoved';
  address: Commercetools_Address;
  type: Scalars['String']['output'];
};

export enum Commercetools_BusinessUnitStatus {
  Active = 'Active',
  Inactive = 'Inactive'
}

export type Commercetools_BusinessUnitStatusChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitStatusChanged';
  status: Commercetools_BusinessUnitStatus;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitStoreAdded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitStoreAdded';
  store: Commercetools_Store;
  storeRef: Commercetools_KeyReference;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitStoreModeChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitStoreModeChanged';
  oldStoreMode: Scalars['String']['output'];
  oldStores?: Maybe<Array<Commercetools_Store>>;
  oldStoresRef?: Maybe<Array<Commercetools_KeyReference>>;
  storeMode: Scalars['String']['output'];
  stores?: Maybe<Array<Commercetools_Store>>;
  storesRef?: Maybe<Array<Commercetools_KeyReference>>;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitStoreRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitStoreRemoved';
  store: Commercetools_Store;
  storeRef: Commercetools_KeyReference;
  type: Scalars['String']['output'];
};

export type Commercetools_BusinessUnitStoresSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_BusinessUnitStoresSet';
  stores: Array<Commercetools_Store>;
  storesRef: Array<Commercetools_KeyReference>;
  type: Scalars['String']['output'];
};

export enum Commercetools_BusinessUnitType {
  Company = 'Company',
  Division = 'Division'
}

/** A shopping cart holds product variants and can be ordered. Each cart either belongs to a registered customer or is an anonymous cart. */
export type Commercetools_Cart = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_Cart';
  anonymousId?: Maybe<Scalars['String']['output']>;
  billingAddress?: Maybe<Commercetools_Address>;
  businessUnit?: Maybe<Commercetools_BusinessUnit>;
  businessUnitRef?: Maybe<Commercetools_KeyReference>;
  cartState: Commercetools_CartState;
  country?: Maybe<Scalars['Commercetools_Country']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  customLineItems: Array<Commercetools_CustomLineItem>;
  customer?: Maybe<Commercetools_Customer>;
  customerEmail?: Maybe<Scalars['String']['output']>;
  customerGroup?: Maybe<Commercetools_CustomerGroup>;
  customerGroupRef?: Maybe<Commercetools_Reference>;
  customerId?: Maybe<Scalars['String']['output']>;
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']['output']>;
  directDiscounts: Array<Commercetools_DirectDiscount>;
  discountCodes: Array<Commercetools_DiscountCodeInfo>;
  discountOnTotalPrice?: Maybe<Commercetools_DiscountOnTotalPrice>;
  id: Scalars['String']['output'];
  inventoryMode: Commercetools_InventoryMode;
  itemShippingAddresses: Array<Commercetools_Address>;
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  lineItems: Array<Commercetools_LineItem>;
  locale?: Maybe<Scalars['Commercetools_Locale']['output']>;
  origin: Commercetools_CartOrigin;
  paymentInfo?: Maybe<Commercetools_PaymentInfo>;
  refusedGifts: Array<Commercetools_CartDiscount>;
  refusedGiftsRefs: Array<Commercetools_Reference>;
  shipping: Array<Commercetools_Shipping>;
  shippingAddress?: Maybe<Commercetools_Address>;
  shippingCustomFields?: Maybe<Commercetools_CustomFieldsType>;
  shippingInfo?: Maybe<Commercetools_ShippingInfo>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  shippingMode: Commercetools_ShippingMode;
  shippingRateInput?: Maybe<Commercetools_ShippingRateInput>;
  store?: Maybe<Commercetools_Store>;
  storeRef?: Maybe<Commercetools_KeyReference>;
  taxCalculationMode: Commercetools_TaxCalculationMode;
  taxMode: Commercetools_TaxMode;
  taxRoundingMode: Commercetools_RoundingMode;
  taxedPrice?: Maybe<Commercetools_TaxedPrice>;
  taxedShippingPrice?: Maybe<Commercetools_TaxedPrice>;
  totalLineItemQuantity?: Maybe<Scalars['Commercetools_Long']['output']>;
  totalPrice: Commercetools_Money;
  version: Scalars['Commercetools_Long']['output'];
};


/** A shopping cart holds product variants and can be ordered. Each cart either belongs to a registered customer or is an anonymous cart. */
export type Commercetools_CartLineItemsArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Commercetools_CartCreated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CartCreated';
  discountCodesRefs: Array<Commercetools_Reference>;
  lineItemCount: Scalars['Int']['output'];
  totalPrice: Commercetools_Money;
  type: Scalars['String']['output'];
};

/**
 *
 * Cart discounts are recalculated every time LineItems or CustomLineItems are added or removed from the Cart or an order is created from the cart.
 *
 * The number of active cart discounts that do not require a discount code (isActive=true and requiresDiscountCode=false) is limited to 100.
 *
 */
export type Commercetools_CartDiscount = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_CartDiscount';
  cartPredicate: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<Commercetools_LocalizedString>;
  referenceRefs: Array<Commercetools_Reference>;
  requiresDiscountCode: Scalars['Boolean']['output'];
  sortOrder: Scalars['String']['output'];
  stackingMode: Commercetools_StackingMode;
  stores: Array<Commercetools_Store>;
  storesRef: Array<Commercetools_KeyReference>;
  target?: Maybe<Commercetools_CartDiscountTarget>;
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
  value: Commercetools_CartDiscountValue;
  version: Scalars['Commercetools_Long']['output'];
};


/**
 *
 * Cart discounts are recalculated every time LineItems or CustomLineItems are added or removed from the Cart or an order is created from the cart.
 *
 * The number of active cart discounts that do not require a discount code (isActive=true and requiresDiscountCode=false) is limited to 100.
 *
 */
export type Commercetools_CartDiscountDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


/**
 *
 * Cart discounts are recalculated every time LineItems or CustomLineItems are added or removed from the Cart or an order is created from the cart.
 *
 * The number of active cart discounts that do not require a discount code (isActive=true and requiresDiscountCode=false) is limited to 100.
 *
 */
export type Commercetools_CartDiscountNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_CartDiscountCreated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CartDiscountCreated';
  cartDiscount: Commercetools_CartDiscount;
  type: Scalars['String']['output'];
};

export type Commercetools_CartDiscountDeleted = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CartDiscountDeleted';
  type: Scalars['String']['output'];
};

export type Commercetools_CartDiscountStoreAdded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CartDiscountStoreAdded';
  store: Commercetools_Store;
  storeRef: Commercetools_KeyReference;
  type: Scalars['String']['output'];
};

export type Commercetools_CartDiscountStoreRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CartDiscountStoreRemoved';
  store: Commercetools_Store;
  storeRef: Commercetools_KeyReference;
  type: Scalars['String']['output'];
};

export type Commercetools_CartDiscountStoresSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CartDiscountStoresSet';
  stores: Array<Commercetools_Store>;
  storesRef: Array<Commercetools_KeyReference>;
  type: Scalars['String']['output'];
};

export type Commercetools_CartDiscountTarget = {
  type: Scalars['String']['output'];
};

export type Commercetools_CartDiscountTotalPriceTarget = Commercetools_CartDiscountTarget & {
  __typename?: 'Commercetools_CartDiscountTotalPriceTarget';
  type: Scalars['String']['output'];
};

export type Commercetools_CartDiscountValue = {
  type: Scalars['String']['output'];
};

export enum Commercetools_CartOrigin {
  /** The cart was created by the customer. This is the default value */
  Customer = 'Customer',
  /** The cart was created by the merchant on behalf of the customer */
  Merchant = 'Merchant',
  /** The cart was created by our platform and belongs to a Quote. */
  Quote = 'Quote'
}

export enum Commercetools_CartState {
  /** The cart can be updated and ordered. It is the default state. */
  Active = 'Active',
  /** The cart is frozen. The cart is ready for checkout and a few update actions are not allowed. */
  Frozen = 'Frozen',
  /** Anonymous cart whose content was merged into a customers cart on signin. No further operations on the cart are allowed. */
  Merged = 'Merged',
  /** The cart was ordered. No further operations on the cart are allowed. */
  Ordered = 'Ordered'
}

export type Commercetools_Category = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_Category';
  ancestors: Array<Commercetools_Category>;
  ancestorsRef: Array<Commercetools_Reference>;
  assets: Array<Commercetools_Asset>;
  /** Number of direct child categories. */
  childCount: Scalars['Int']['output'];
  /** Direct child categories. */
  children?: Maybe<Array<Commercetools_Category>>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  externalId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaDescriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaKeywordsAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  metaTitleAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<Commercetools_LocalizedString>;
  orderHint: Scalars['String']['output'];
  parent?: Maybe<Commercetools_Category>;
  parentRef?: Maybe<Commercetools_Reference>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales: Array<Commercetools_LocalizedString>;
  /** Number of staged products in the category subtree. */
  stagedProductCount: Scalars['Int']['output'];
  version: Scalars['Commercetools_Long']['output'];
};


export type Commercetools_CategoryDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_CategoryMetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_CategoryMetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_CategoryMetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_CategoryNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_CategorySlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_CategoryCreated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CategoryCreated';
  category: Commercetools_Category;
  type: Scalars['String']['output'];
};

export type Commercetools_CategoryOrderHint = {
  __typename?: 'Commercetools_CategoryOrderHint';
  categoryId: Scalars['String']['output'];
  orderHint: Scalars['String']['output'];
};

export type Commercetools_CategorySlugChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CategorySlugChanged';
  oldSlug?: Maybe<Scalars['String']['output']>;
  oldSlugAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales: Array<Commercetools_LocalizedString>;
  type: Scalars['String']['output'];
};


export type Commercetools_CategorySlugChangedOldSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_CategorySlugChangedSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_ChangeStagedOrderCustomLineItemMoneyOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_ChangeStagedOrderCustomLineItemMoneyOutput';
  customLineItemId?: Maybe<Scalars['String']['output']>;
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  money: Commercetools_BaseMoney;
  type: Scalars['String']['output'];
};

export type Commercetools_ChangeStagedOrderCustomLineItemQuantityOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_ChangeStagedOrderCustomLineItemQuantityOutput';
  customLineItemId?: Maybe<Scalars['String']['output']>;
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Commercetools_Long']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_ChangeStagedOrderLineItemQuantityOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_ChangeStagedOrderLineItemQuantityOutput';
  externalPrice?: Maybe<Commercetools_BaseMoney>;
  externalTotalPrice?: Maybe<Commercetools_ExternalLineItemTotalPrice>;
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Commercetools_Long']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_ChangeStagedOrderOrderStateOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_ChangeStagedOrderOrderStateOutput';
  orderState: Commercetools_OrderState;
  type: Scalars['String']['output'];
};

export type Commercetools_ChangeStagedOrderPaymentStateOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_ChangeStagedOrderPaymentStateOutput';
  paymentState: Commercetools_PaymentState;
  type: Scalars['String']['output'];
};

export type Commercetools_ChangeStagedOrderShipmentStateOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_ChangeStagedOrderShipmentStateOutput';
  shipmentState: Commercetools_ShipmentState;
  type: Scalars['String']['output'];
};

export type Commercetools_ChangeStagedOrderTaxCalculationModeOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_ChangeStagedOrderTaxCalculationModeOutput';
  taxCalculationMode: Commercetools_TaxCalculationMode;
  type: Scalars['String']['output'];
};

export type Commercetools_ChangeStagedOrderTaxModeOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_ChangeStagedOrderTaxModeOutput';
  taxMode: Commercetools_TaxMode;
  type: Scalars['String']['output'];
};

export type Commercetools_ChangeStagedOrderTaxRoundingModeOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_ChangeStagedOrderTaxRoundingModeOutput';
  taxRoundingMode: Commercetools_RoundingMode;
  type: Scalars['String']['output'];
};

export type Commercetools_ChangeSubscription = {
  __typename?: 'Commercetools_ChangeSubscription';
  resourceTypeId: Scalars['String']['output'];
};

export type Commercetools_Channel = Commercetools_ReferenceExpandable & Commercetools_ReviewTarget & Commercetools_Versioned & {
  __typename?: 'Commercetools_Channel';
  address?: Maybe<Commercetools_Address>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  geoLocation?: Maybe<Commercetools_Geometry>;
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  reviewRatingStatistics?: Maybe<Commercetools_ReviewRatingStatistics>;
  roles: Array<Commercetools_ChannelRole>;
  version: Scalars['Commercetools_Long']['output'];
};


export type Commercetools_ChannelDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ChannelNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_ChannelReferenceIdentifier = {
  __typename?: 'Commercetools_ChannelReferenceIdentifier';
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  typeId: Scalars['String']['output'];
};

export enum Commercetools_ChannelRole {
  /** Role tells that this channel can be used to track inventory entries.Channels with this role can be treated as warehouses */
  InventorySupply = 'InventorySupply',
  /** Role tells that this channel can be used to track order export activities. */
  OrderExport = 'OrderExport',
  /** Role tells that this channel can be used to track order import activities. */
  OrderImport = 'OrderImport',
  /** This role can be combined with some other roles (e.g. with `InventorySupply`) to represent the fact that this particular channel is the primary/master channel among the channels of the same type. */
  Primary = 'Primary',
  /** Role tells that this channel can be used to expose products to a specific distribution channel. It can be used by the cart to select a product price. */
  ProductDistribution = 'ProductDistribution'
}

export type Commercetools_ClassificationShippingRateInput = Commercetools_ShippingRateInput & {
  __typename?: 'Commercetools_ClassificationShippingRateInput';
  key: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  labelAllLocales: Array<Commercetools_LocalizedString>;
  type: Scalars['String']['output'];
};


export type Commercetools_ClassificationShippingRateInputLabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_ClassificationShippingRateInputDraftOutput = Commercetools_ShippingRateInputDraftOutput & {
  __typename?: 'Commercetools_ClassificationShippingRateInputDraftOutput';
  key: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_CloudEventsSubscriptionsFormat = Commercetools_NotificationFormat & {
  __typename?: 'Commercetools_CloudEventsSubscriptionsFormat';
  cloudEventsVersion: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_CommercetoolsSubscription = Commercetools_Versioned & {
  __typename?: 'Commercetools_CommercetoolsSubscription';
  changes: Array<Commercetools_ChangeSubscription>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  destination: Commercetools_Destination;
  format: Commercetools_NotificationFormat;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  messages: Array<Commercetools_MessageSubscription>;
  status: Commercetools_SubscriptionHealthStatus;
  version: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_ConfluentCloudDestination = Commercetools_Destination & {
  __typename?: 'Commercetools_ConfluentCloudDestination';
  acks: Scalars['String']['output'];
  apiKey: Scalars['String']['output'];
  apiSecret: Scalars['String']['output'];
  bootstrapServer: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  topic: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_CustomFieldsCommand = {
  __typename?: 'Commercetools_CustomFieldsCommand';
  fields: Scalars['Json']['output'];
  typeId?: Maybe<Scalars['String']['output']>;
  typeKey?: Maybe<Scalars['String']['output']>;
  typeResId?: Maybe<Commercetools_ResourceIdentifier>;
};

export type Commercetools_CustomFieldsType = {
  __typename?: 'Commercetools_CustomFieldsType';
  /** This field contains non-typed data. */
  customFieldsRaw?: Maybe<Array<Commercetools_RawCustomField>>;
  type?: Maybe<Commercetools_TypeDefinition>;
  typeRef: Commercetools_Reference;
};


export type Commercetools_CustomFieldsTypeCustomFieldsRawArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']['input']>>;
  includeNames?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** A custom line item is a generic item that can be added to the cart but is not bound to a product. You can use it for discounts (negative money), vouchers, complex cart rules, additional services or fees. You control the lifecycle of this item. */
export type Commercetools_CustomLineItem = {
  __typename?: 'Commercetools_CustomLineItem';
  custom?: Maybe<Commercetools_CustomFieldsType>;
  discountedPricePerQuantity: Array<Commercetools_DiscountedLineItemPriceForQuantity>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  money: Commercetools_BaseMoney;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<Commercetools_LocalizedString>;
  perMethodTaxRate: Array<Commercetools_MethodTaxRate>;
  priceMode: Commercetools_CustomLineItemPriceMode;
  quantity: Scalars['Commercetools_Long']['output'];
  shippingDetails?: Maybe<Commercetools_ItemShippingDetails>;
  slug: Scalars['String']['output'];
  state: Array<Commercetools_ItemState>;
  taxCategory?: Maybe<Commercetools_TaxCategory>;
  taxCategoryRef?: Maybe<Commercetools_Reference>;
  taxRate?: Maybe<Commercetools_TaxRate>;
  taxedPrice?: Maybe<Commercetools_TaxedItemPrice>;
  taxedPricePortions: Array<Commercetools_MethodTaxedPrice>;
  totalPrice: Commercetools_Money;
};


/** A custom line item is a generic item that can be added to the cart but is not bound to a product. You can use it for discounts (negative money), vouchers, complex cart rules, additional services or fees. You control the lifecycle of this item. */
export type Commercetools_CustomLineItemNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_CustomLineItemDraftOutput = {
  __typename?: 'Commercetools_CustomLineItemDraftOutput';
  custom?: Maybe<Commercetools_CustomFieldsCommand>;
  externalTaxRate?: Maybe<Commercetools_ExternalTaxRateDraftOutput>;
  key?: Maybe<Scalars['String']['output']>;
  money: Commercetools_BaseMoney;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<Commercetools_LocalizedString>;
  priceMode: Commercetools_CustomLineItemPriceMode;
  quantity?: Maybe<Scalars['Commercetools_Long']['output']>;
  shippingDetails?: Maybe<Commercetools_ItemShippingDetailsDraftOutput>;
  slug: Scalars['String']['output'];
  taxCategoryResId?: Maybe<Commercetools_ResourceIdentifier>;
};


export type Commercetools_CustomLineItemDraftOutputNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export enum Commercetools_CustomLineItemPriceMode {
  /** Cart discounts are deactivated for the custom line items with this price mode. */
  External = 'External',
  /** This is the default mode. */
  Standard = 'Standard'
}

export type Commercetools_CustomLineItemReturnItem = Commercetools_ReturnItem & {
  __typename?: 'Commercetools_CustomLineItemReturnItem';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  custom?: Maybe<Commercetools_CustomFieldsType>;
  customLineItemId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  paymentState: Commercetools_ReturnPaymentState;
  quantity: Scalars['Commercetools_Long']['output'];
  shipmentState: Commercetools_ReturnShipmentState;
  type: Scalars['String']['output'];
};

export type Commercetools_CustomLineItemStateTransition = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_CustomLineItemStateTransition';
  customLineItemId: Scalars['String']['output'];
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  fromState?: Maybe<Commercetools_State>;
  fromStateRef: Commercetools_Reference;
  quantity: Scalars['Commercetools_Long']['output'];
  toState?: Maybe<Commercetools_State>;
  toStateRef: Commercetools_Reference;
  transitionDate: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_CustomLineItemsTarget = Commercetools_CartDiscountTarget & {
  __typename?: 'Commercetools_CustomLineItemsTarget';
  predicate: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_CustomObject = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_CustomObject';
  container: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  value: Scalars['Json']['output'];
  version: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_CustomSuggestTokenizer = Commercetools_SuggestTokenizer & {
  __typename?: 'Commercetools_CustomSuggestTokenizer';
  inputs: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

/** A customer is a person purchasing products. Carts, Orders and Reviews can be associated to a customer. */
export type Commercetools_Customer = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_Customer';
  addresses: Array<Commercetools_Address>;
  authenticationMode?: Maybe<Commercetools_AuthenticationMode>;
  billingAddressIds: Array<Scalars['String']['output']>;
  billingAddresses: Array<Commercetools_Address>;
  companyName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  customerGroup?: Maybe<Commercetools_CustomerGroup>;
  /** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
  customerGroupAssignments?: Maybe<Array<Commercetools_CustomerGroupAssignment>>;
  customerGroupRef?: Maybe<Commercetools_Reference>;
  customerNumber?: Maybe<Scalars['String']['output']>;
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  defaultBillingAddress?: Maybe<Commercetools_Address>;
  defaultBillingAddressId?: Maybe<Scalars['String']['output']>;
  defaultShippingAddress?: Maybe<Commercetools_Address>;
  defaultShippingAddressId?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  externalId?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  lastName?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['Commercetools_Locale']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  salutation?: Maybe<Scalars['String']['output']>;
  shippingAddressIds: Array<Scalars['String']['output']>;
  shippingAddresses: Array<Commercetools_Address>;
  stores: Array<Commercetools_Store>;
  storesRef: Array<Commercetools_KeyReference>;
  title?: Maybe<Scalars['String']['output']>;
  vatId?: Maybe<Scalars['String']['output']>;
  version: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_CustomerAddressAdded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerAddressAdded';
  address: Commercetools_Address;
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerAddressChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerAddressChanged';
  address: Commercetools_Address;
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerAddressCustomFieldAdded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerAddressCustomFieldAdded';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type Commercetools_CustomerAddressCustomFieldChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerAddressCustomFieldChanged';
  name: Scalars['String']['output'];
  previousValue?: Maybe<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type Commercetools_CustomerAddressCustomFieldRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerAddressCustomFieldRemoved';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerAddressCustomTypeRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerAddressCustomTypeRemoved';
  previousTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerAddressCustomTypeSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerAddressCustomTypeSet';
  customFields: Commercetools_CustomFieldsType;
  previousTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerAddressRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerAddressRemoved';
  address: Commercetools_Address;
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerCompanyNameSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerCompanyNameSet';
  companyName?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerCreated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerCreated';
  customer: Commercetools_Customer;
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerCustomFieldAdded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerCustomFieldAdded';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type Commercetools_CustomerCustomFieldChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerCustomFieldChanged';
  name: Scalars['String']['output'];
  previousValue?: Maybe<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type Commercetools_CustomerCustomFieldRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerCustomFieldRemoved';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerCustomTypeRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerCustomTypeRemoved';
  previousTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerCustomTypeSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerCustomTypeSet';
  customFields: Commercetools_CustomFieldsType;
  previousTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerDateOfBirthSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerDateOfBirthSet';
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerDeleted = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerDeleted';
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerEmailChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerEmailChanged';
  email: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerEmailToken = Commercetools_Versioned & {
  __typename?: 'Commercetools_CustomerEmailToken';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  customerId: Scalars['String']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  value: Scalars['String']['output'];
  version: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_CustomerEmailTokenCreated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerEmailTokenCreated';
  customerId: Scalars['String']['output'];
  expiresAt: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerEmailVerified = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerEmailVerified';
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerFirstNameSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerFirstNameSet';
  firstName?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

/** A customer can be a member in a customer group (e.g. reseller, gold member). A customer group can be used in price calculations with special prices being assigned to certain customer groups. */
export type Commercetools_CustomerGroup = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_CustomerGroup';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  name: Scalars['String']['output'];
  version: Scalars['Commercetools_Long']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type Commercetools_CustomerGroupAssignment = {
  __typename?: 'Commercetools_CustomerGroupAssignment';
  customerGroup?: Maybe<Commercetools_CustomerGroup>;
  customerGroupRef?: Maybe<Commercetools_Reference>;
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type Commercetools_CustomerGroupAssignmentAdded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerGroupAssignmentAdded';
  customerGroupAssignment: Commercetools_CustomerGroupAssignment;
  type: Scalars['String']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type Commercetools_CustomerGroupAssignmentRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerGroupAssignmentRemoved';
  customerGroupAssignment: Commercetools_CustomerGroupAssignment;
  type: Scalars['String']['output'];
};

/** CLOSED BETA: This feature is subject to change and should not be used in production. https://docs.commercetools.com/api/contract#closed-beta */
export type Commercetools_CustomerGroupAssignmentsSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerGroupAssignmentsSet';
  customerGroupAssignments: Array<Commercetools_CustomerGroupAssignment>;
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerGroupCustomFieldAdded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerGroupCustomFieldAdded';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type Commercetools_CustomerGroupCustomFieldChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerGroupCustomFieldChanged';
  name: Scalars['String']['output'];
  oldValue?: Maybe<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type Commercetools_CustomerGroupCustomFieldRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerGroupCustomFieldRemoved';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerGroupCustomTypeRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerGroupCustomTypeRemoved';
  oldTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerGroupCustomTypeSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerGroupCustomTypeSet';
  customFields: Commercetools_CustomFieldsType;
  oldTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerGroupReferenceIdentifier = {
  __typename?: 'Commercetools_CustomerGroupReferenceIdentifier';
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  typeId: Scalars['String']['output'];
};

export type Commercetools_CustomerGroupSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerGroupSet';
  customerGroup?: Maybe<Commercetools_CustomerGroup>;
  customerGroupRef?: Maybe<Commercetools_Reference>;
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerLastNameSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerLastNameSet';
  lastName?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerPasswordToken = Commercetools_Versioned & {
  __typename?: 'Commercetools_CustomerPasswordToken';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  customerId: Scalars['String']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  value: Scalars['String']['output'];
  version: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_CustomerPasswordTokenCreated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerPasswordTokenCreated';
  customerId: Scalars['String']['output'];
  expiresAt: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerPasswordUpdated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerPasswordUpdated';
  reset: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_CustomerTitleSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_CustomerTitleSet';
  title?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_DateAttributeDefinitionType = Commercetools_AttributeDefinitionType & {
  __typename?: 'Commercetools_DateAttributeDefinitionType';
  name: Scalars['String']['output'];
};

export type Commercetools_DateTimeAttributeDefinitionType = Commercetools_AttributeDefinitionType & {
  __typename?: 'Commercetools_DateTimeAttributeDefinitionType';
  name: Scalars['String']['output'];
};

export type Commercetools_DateTimeType = Commercetools_FieldType & {
  __typename?: 'Commercetools_DateTimeType';
  name: Scalars['String']['output'];
};

export type Commercetools_DateType = Commercetools_FieldType & {
  __typename?: 'Commercetools_DateType';
  name: Scalars['String']['output'];
};

export type Commercetools_Delivery = {
  __typename?: 'Commercetools_Delivery';
  address?: Maybe<Commercetools_Address>;
  createdAt: Scalars['DateTime']['output'];
  custom?: Maybe<Commercetools_CustomFieldsType>;
  id: Scalars['String']['output'];
  items: Array<Commercetools_DeliveryItem>;
  key?: Maybe<Scalars['String']['output']>;
  parcels: Array<Commercetools_Parcel>;
};

export type Commercetools_DeliveryAdded = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_DeliveryAdded';
  delivery: Commercetools_Delivery;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_DeliveryAddressSet = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_DeliveryAddressSet';
  address?: Maybe<Commercetools_Address>;
  deliveryId: Scalars['String']['output'];
  oldAddress?: Maybe<Commercetools_Address>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_DeliveryItem = {
  __typename?: 'Commercetools_DeliveryItem';
  id: Scalars['String']['output'];
  quantity: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_DeliveryItemsUpdated = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_DeliveryItemsUpdated';
  deliveryId: Scalars['String']['output'];
  items: Array<Commercetools_DeliveryItem>;
  oldItems: Array<Commercetools_DeliveryItem>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_DeliveryRemoved = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_DeliveryRemoved';
  delivery: Commercetools_Delivery;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_Destination = {
  type: Scalars['String']['output'];
};

export type Commercetools_Dimensions = {
  __typename?: 'Commercetools_Dimensions';
  height: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};

export type Commercetools_DirectDiscount = {
  __typename?: 'Commercetools_DirectDiscount';
  id: Scalars['String']['output'];
  target?: Maybe<Commercetools_CartDiscountTarget>;
  value: Commercetools_CartDiscountValue;
};

export type Commercetools_DirectDiscountDraftOutput = {
  __typename?: 'Commercetools_DirectDiscountDraftOutput';
  target?: Maybe<Commercetools_CartDiscountTarget>;
  value: Commercetools_CartDiscountValue;
};

/** With discount codes it is possible to give specific cart discounts to an eligible amount of users. They are defined by a string value which can be added to a cart so that specific cart discounts can be applied to the cart. */
export type Commercetools_DiscountCode = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_DiscountCode';
  /** How many times this discount code was applied (only applications that were part of a successful checkout are considered) */
  applicationCount: Scalars['Commercetools_Long']['output'];
  applicationVersion?: Maybe<Scalars['Commercetools_Long']['output']>;
  cartDiscountRefs: Array<Commercetools_Reference>;
  cartDiscounts: Array<Commercetools_CartDiscount>;
  cartPredicate?: Maybe<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  groups: Array<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  maxApplications?: Maybe<Scalars['Commercetools_Long']['output']>;
  maxApplicationsPerCustomer?: Maybe<Scalars['Commercetools_Long']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  referenceRefs: Array<Commercetools_Reference>;
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Commercetools_Long']['output'];
};


/** With discount codes it is possible to give specific cart discounts to an eligible amount of users. They are defined by a string value which can be added to a cart so that specific cart discounts can be applied to the cart. */
export type Commercetools_DiscountCodeDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


/** With discount codes it is possible to give specific cart discounts to an eligible amount of users. They are defined by a string value which can be added to a cart so that specific cart discounts can be applied to the cart. */
export type Commercetools_DiscountCodeNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_DiscountCodeCreated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_DiscountCodeCreated';
  discountCode: Commercetools_DiscountCode;
  type: Scalars['String']['output'];
};

export type Commercetools_DiscountCodeDeleted = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_DiscountCodeDeleted';
  type: Scalars['String']['output'];
};

export type Commercetools_DiscountCodeInfo = {
  __typename?: 'Commercetools_DiscountCodeInfo';
  discountCode?: Maybe<Commercetools_DiscountCode>;
  discountCodeRef: Commercetools_Reference;
  state?: Maybe<Commercetools_DiscountCodeState>;
};

export type Commercetools_DiscountCodeKeySet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_DiscountCodeKeySet';
  key?: Maybe<Scalars['String']['output']>;
  oldKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export enum Commercetools_DiscountCodeState {
  /** The discount code is active and none of the discounts were applied because the discount application was stopped by one discount that has the StackingMode of StopAfterThisDiscount defined */
  ApplicationStoppedByPreviousDiscount = 'ApplicationStoppedByPreviousDiscount',
  /** The discount code is active and it contains at least one active and valid CartDiscount. But its cart predicate does not match the cart or none of the contained active discount’s cart predicates match the cart */
  DoesNotMatchCart = 'DoesNotMatchCart',
  /** The discount code is active and it contains at least one active and valid CartDiscount. The discount code cartPredicate matches the cart and at least one of the contained active discount’s cart predicates matches the cart. */
  MatchesCart = 'MatchesCart',
  /** maxApplications or maxApplicationsPerCustomer for discountCode has been reached. */
  MaxApplicationReached = 'MaxApplicationReached',
  /** The discount code is not active or it does not contain any active cart discounts. */
  NotActive = 'NotActive',
  /** The discount code is not valid or it does not contain any valid cart discounts. Validity is determined based on the validFrom and validUntil dates */
  NotValid = 'NotValid'
}

export type Commercetools_DiscountOnTotalPrice = {
  __typename?: 'Commercetools_DiscountOnTotalPrice';
  discountedAmount: Commercetools_BaseMoney;
  discountedGrossAmount?: Maybe<Commercetools_BaseMoney>;
  discountedNetAmount?: Maybe<Commercetools_BaseMoney>;
  includedDiscounts: Array<Commercetools_DiscountedTotalPricePortion>;
};

export type Commercetools_DiscountedLineItemPortion = {
  __typename?: 'Commercetools_DiscountedLineItemPortion';
  discount?: Maybe<Commercetools_CartDiscount>;
  discountRef: Commercetools_Reference;
  discountedAmount: Commercetools_BaseMoney;
};

export type Commercetools_DiscountedLineItemPrice = {
  __typename?: 'Commercetools_DiscountedLineItemPrice';
  includedDiscounts: Array<Commercetools_DiscountedLineItemPortion>;
  value: Commercetools_BaseMoney;
};

export type Commercetools_DiscountedLineItemPriceForQuantity = {
  __typename?: 'Commercetools_DiscountedLineItemPriceForQuantity';
  discountedPrice: Commercetools_DiscountedLineItemPrice;
  quantity: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_DiscountedProductPriceValue = {
  __typename?: 'Commercetools_DiscountedProductPriceValue';
  discount?: Maybe<Commercetools_ProductDiscount>;
  discountRef: Commercetools_Reference;
  value: Commercetools_BaseMoney;
};

export type Commercetools_DiscountedTotalPricePortion = {
  __typename?: 'Commercetools_DiscountedTotalPricePortion';
  discount?: Maybe<Commercetools_CartDiscount>;
  discountRef: Commercetools_Reference;
  discountedAmount: Commercetools_BaseMoney;
};

export type Commercetools_EnumAttributeDefinitionType = Commercetools_AttributeDefinitionType & {
  __typename?: 'Commercetools_EnumAttributeDefinitionType';
  name: Scalars['String']['output'];
  values: Commercetools_PlainEnumValueResult;
};


export type Commercetools_EnumAttributeDefinitionTypeValuesArgs = {
  excludeKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  includeKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Commercetools_EnumType = Commercetools_FieldType & {
  __typename?: 'Commercetools_EnumType';
  name: Scalars['String']['output'];
  values: Array<Commercetools_EnumValue>;
};

export type Commercetools_EnumValue = {
  __typename?: 'Commercetools_EnumValue';
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type Commercetools_EventBridgeDestination = Commercetools_Destination & {
  __typename?: 'Commercetools_EventBridgeDestination';
  accountId: Scalars['String']['output'];
  region: Scalars['String']['output'];
  source: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_EventGridDestination = Commercetools_Destination & {
  __typename?: 'Commercetools_EventGridDestination';
  accessKey: Scalars['String']['output'];
  type: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type Commercetools_Extension = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_Extension';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  destination: Commercetools_ExtensionDestination;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  timeoutInMs?: Maybe<Scalars['Int']['output']>;
  triggers: Array<Commercetools_Trigger>;
  version: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_ExtensionDestination = {
  type: Scalars['String']['output'];
};

export type Commercetools_ExternalDiscountValue = Commercetools_ProductDiscountValue & {
  __typename?: 'Commercetools_ExternalDiscountValue';
  type: Scalars['String']['output'];
};

export type Commercetools_ExternalLineItemTotalPrice = {
  __typename?: 'Commercetools_ExternalLineItemTotalPrice';
  price: Commercetools_BaseMoney;
  totalPrice: Commercetools_Money;
};

export type Commercetools_ExternalTaxAmountDraftOutput = {
  __typename?: 'Commercetools_ExternalTaxAmountDraftOutput';
  taxRate: Commercetools_ExternalTaxRateDraftOutput;
  totalGross: Commercetools_Money;
};

export type Commercetools_ExternalTaxRateDraftOutput = {
  __typename?: 'Commercetools_ExternalTaxRateDraftOutput';
  amount?: Maybe<Scalars['Float']['output']>;
  country: Scalars['Commercetools_Country']['output'];
  includedInPrice: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  state?: Maybe<Scalars['String']['output']>;
  subRates: Array<Commercetools_SubRate>;
};

/** Field definitions describe custom fields and allow you to define some meta-information associated with the field. */
export type Commercetools_FieldDefinition = {
  __typename?: 'Commercetools_FieldDefinition';
  inputHint: Commercetools_TextInputHint;
  label?: Maybe<Scalars['String']['output']>;
  labelAllLocales: Array<Commercetools_LocalizedString>;
  name: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
  type: Commercetools_FieldType;
};


/** Field definitions describe custom fields and allow you to define some meta-information associated with the field. */
export type Commercetools_FieldDefinitionLabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_FieldType = {
  name: Scalars['String']['output'];
};

export type Commercetools_FixedPriceDiscountValue = Commercetools_CartDiscountValue & {
  __typename?: 'Commercetools_FixedPriceDiscountValue';
  money: Array<Commercetools_BaseMoney>;
  type: Scalars['String']['output'];
};

export type Commercetools_Geometry = {
  type: Scalars['String']['output'];
};

export type Commercetools_GiftLineItemValue = Commercetools_CartDiscountValue & {
  __typename?: 'Commercetools_GiftLineItemValue';
  distributionChannelRef?: Maybe<Commercetools_ChannelReferenceIdentifier>;
  productRef: Commercetools_ProductReferenceIdentifier;
  supplyChannelRef?: Maybe<Commercetools_ChannelReferenceIdentifier>;
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type Commercetools_GoogleCloudFunctionDestination = Commercetools_ExtensionDestination & {
  __typename?: 'Commercetools_GoogleCloudFunctionDestination';
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Commercetools_GoogleCloudPubSubDestination = Commercetools_Destination & {
  __typename?: 'Commercetools_GoogleCloudPubSubDestination';
  projectId: Scalars['String']['output'];
  topic: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_HasProductTailoringData = {
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaDescriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaKeywordsAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  metaTitleAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
};


export type Commercetools_HasProductTailoringDataDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_HasProductTailoringDataMetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_HasProductTailoringDataMetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_HasProductTailoringDataMetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_HasProductTailoringDataNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_HasProductTailoringDataSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_HighPrecisionMoney = Commercetools_BaseMoney & {
  __typename?: 'Commercetools_HighPrecisionMoney';
  centAmount: Scalars['Commercetools_Long']['output'];
  currencyCode: Scalars['Commercetools_Currency']['output'];
  fractionDigits: Scalars['Int']['output'];
  preciseAmount: Scalars['Commercetools_Long']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_HttpDestination = Commercetools_ExtensionDestination & {
  __typename?: 'Commercetools_HttpDestination';
  authentication?: Maybe<Commercetools_HttpDestinationAuthentication>;
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Commercetools_HttpDestinationAuthentication = {
  type: Scalars['String']['output'];
};

export type Commercetools_Image = {
  __typename?: 'Commercetools_Image';
  dimensions: Commercetools_Dimensions;
  label?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type Commercetools_ImportStagedOrderCustomLineItemStateOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_ImportStagedOrderCustomLineItemStateOutput';
  customLineItemId?: Maybe<Scalars['String']['output']>;
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  state: Scalars['Commercetools_Set']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_ImportStagedOrderLineItemStateOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_ImportStagedOrderLineItemStateOutput';
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  state: Scalars['Commercetools_Set']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_InheritedAssociate = {
  __typename?: 'Commercetools_InheritedAssociate';
  associateRoleAssignments: Array<Commercetools_InheritedAssociateRoleAssignment>;
  customer?: Maybe<Commercetools_Customer>;
  customerRef?: Maybe<Commercetools_Reference>;
};

export type Commercetools_InheritedAssociateRoleAssignment = {
  __typename?: 'Commercetools_InheritedAssociateRoleAssignment';
  associateRole: Commercetools_AssociateRole;
  associateRoleRef: Commercetools_KeyReference;
  source: Commercetools_BusinessUnit;
  sourceRef: Commercetools_KeyReference;
};

export type Commercetools_InheritedStore = {
  __typename?: 'Commercetools_InheritedStore';
  store?: Maybe<Commercetools_Store>;
  storeRef: Commercetools_KeyReference;
};

export type Commercetools_Initiator = {
  __typename?: 'Commercetools_Initiator';
  anonymousId?: Maybe<Scalars['String']['output']>;
  associateRef?: Maybe<Commercetools_Reference>;
  attributedTo?: Maybe<Commercetools_Attribution>;
  clientId?: Maybe<Scalars['String']['output']>;
  customerRef?: Maybe<Commercetools_Reference>;
  externalUserId?: Maybe<Scalars['String']['output']>;
  isPlatformClient?: Maybe<Scalars['Boolean']['output']>;
  userRef?: Maybe<Commercetools_Reference>;
};

export type Commercetools_InterfaceInteractionsRaw = {
  __typename?: 'Commercetools_InterfaceInteractionsRaw';
  fields: Array<Commercetools_RawCustomField>;
  type?: Maybe<Commercetools_TypeDefinition>;
  typeRef: Commercetools_Reference;
};


export type Commercetools_InterfaceInteractionsRawFieldsArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']['input']>>;
  includeNames?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Commercetools_InterfaceInteractionsRawResult = {
  __typename?: 'Commercetools_InterfaceInteractionsRawResult';
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  results: Array<Commercetools_InterfaceInteractionsRaw>;
  total: Scalars['Int']['output'];
};

/** Inventory allows you to track stock quantity per SKU and optionally per supply channel */
export type Commercetools_InventoryEntry = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_InventoryEntry';
  availableQuantity: Scalars['Commercetools_Long']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  expectedDelivery?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  quantityOnStock: Scalars['Commercetools_Long']['output'];
  restockableInDays?: Maybe<Scalars['Int']['output']>;
  sku: Scalars['String']['output'];
  supplyChannel?: Maybe<Commercetools_Channel>;
  supplyChannelRef?: Maybe<Commercetools_Reference>;
  version: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_InventoryEntryCreated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_InventoryEntryCreated';
  inventoryEntry: Commercetools_InventoryEntry;
  type: Scalars['String']['output'];
};

export type Commercetools_InventoryEntryDeleted = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_InventoryEntryDeleted';
  sku: Scalars['String']['output'];
  supplyChannel?: Maybe<Commercetools_Channel>;
  supplyChannelRef?: Maybe<Commercetools_Reference>;
  type: Scalars['String']['output'];
};

export type Commercetools_InventoryEntryQuantitySet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_InventoryEntryQuantitySet';
  newAvailableQuantity: Scalars['Commercetools_Long']['output'];
  newQuantityOnStock: Scalars['Commercetools_Long']['output'];
  oldAvailableQuantity: Scalars['Commercetools_Long']['output'];
  oldQuantityOnStock: Scalars['Commercetools_Long']['output'];
  supplyChannel?: Maybe<Commercetools_Channel>;
  supplyChannelRef?: Maybe<Commercetools_Reference>;
  type: Scalars['String']['output'];
};

export enum Commercetools_InventoryMode {
  /**
   * Adding items to cart and ordering is independent of inventory. No inventory checks or modifications.
   * This is the default mode for a new cart.
   */
  None = 'None',
  /**
   * Creating an order will fail with an OutOfStock error if an unavailable line item exists. Line items in the cart
   * are only reserved for the duration of the ordering transaction.
   */
  ReserveOnOrder = 'ReserveOnOrder',
  /**
   * Orders are tracked on inventory. That means, ordering a LineItem will decrement the available quantity on the
   * respective InventoryEntry. Creating an order will succeed even if the line item’s available quantity is zero or
   * negative. But creating an order will fail with an OutOfStock error if no matching inventory entry exists for a
   * line item.
   */
  TrackOnly = 'TrackOnly'
}

export type Commercetools_ItemShippingAddressTargetDraftOutput = {
  __typename?: 'Commercetools_ItemShippingAddressTargetDraftOutput';
  addressKey: Scalars['String']['output'];
  quantity: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_ItemShippingDetails = {
  __typename?: 'Commercetools_ItemShippingDetails';
  targets: Array<Commercetools_ItemShippingTarget>;
  valid: Scalars['Boolean']['output'];
};

export type Commercetools_ItemShippingDetailsDraftOutput = {
  __typename?: 'Commercetools_ItemShippingDetailsDraftOutput';
  itemShippingAddressTargets: Array<Commercetools_ItemShippingAddressTargetDraftOutput>;
  shippingTargets: Array<Commercetools_ShippingMethodTargetDraftOutput>;
  targets: Array<Commercetools_ItemShippingTarget>;
};

export type Commercetools_ItemShippingTarget = {
  __typename?: 'Commercetools_ItemShippingTarget';
  addressKey: Scalars['String']['output'];
  quantity: Scalars['Commercetools_Long']['output'];
  shippingMethodKey?: Maybe<Scalars['String']['output']>;
};

export type Commercetools_ItemState = {
  __typename?: 'Commercetools_ItemState';
  quantity: Scalars['Commercetools_Long']['output'];
  state?: Maybe<Commercetools_State>;
  stateRef: Commercetools_Reference;
};

export type Commercetools_KeyReference = {
  __typename?: 'Commercetools_KeyReference';
  key: Scalars['String']['output'];
  typeId: Scalars['String']['output'];
};

/**
 * A line item is a snapshot of a product variant at the time it was added to the cart.
 *
 * Since a product variant may change at any time, the ProductVariant data is copied into the field variant.
 * The relation to the Product is kept but the line item will not automatically update if the product variant changes.
 * On the cart, the line item can be updated manually. The productSlug refers to the current version of the product.
 * It can be used to link to the product. If the product has been deleted, the line item remains but refers to a
 * non-existent product and the productSlug is left empty.
 *
 * Please also note that creating an order is impossible if the product or product variant a line item relates to has been deleted.
 */
export type Commercetools_LineItem = {
  __typename?: 'Commercetools_LineItem';
  addedAt?: Maybe<Scalars['DateTime']['output']>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  discountedPricePerQuantity: Array<Commercetools_DiscountedLineItemPriceForQuantity>;
  distributionChannel?: Maybe<Commercetools_Channel>;
  distributionChannelRef?: Maybe<Commercetools_Reference>;
  id: Scalars['String']['output'];
  inventoryMode?: Maybe<Commercetools_InventoryMode>;
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt?: Maybe<Scalars['DateTime']['output']>;
  lineItemMode: Commercetools_LineItemMode;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<Commercetools_LocalizedString>;
  perMethodTaxRate: Array<Commercetools_MethodTaxRate>;
  price: Commercetools_ProductPrice;
  priceMode: Commercetools_LineItemPriceMode;
  productId: Scalars['String']['output'];
  productKey?: Maybe<Scalars['String']['output']>;
  productSlug?: Maybe<Scalars['String']['output']>;
  productSlugAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  productType?: Maybe<Commercetools_ProductTypeDefinition>;
  productTypeRef?: Maybe<Commercetools_Reference>;
  quantity: Scalars['Commercetools_Long']['output'];
  shippingDetails?: Maybe<Commercetools_ItemShippingDetails>;
  state: Array<Commercetools_ItemState>;
  supplyChannel?: Maybe<Commercetools_Channel>;
  supplyChannelRef?: Maybe<Commercetools_Reference>;
  taxRate?: Maybe<Commercetools_TaxRate>;
  taxedPrice?: Maybe<Commercetools_TaxedItemPrice>;
  taxedPricePortions: Array<Commercetools_MethodTaxedPrice>;
  totalPrice?: Maybe<Commercetools_Money>;
  variant?: Maybe<Commercetools_ProductVariant>;
};


/**
 * A line item is a snapshot of a product variant at the time it was added to the cart.
 *
 * Since a product variant may change at any time, the ProductVariant data is copied into the field variant.
 * The relation to the Product is kept but the line item will not automatically update if the product variant changes.
 * On the cart, the line item can be updated manually. The productSlug refers to the current version of the product.
 * It can be used to link to the product. If the product has been deleted, the line item remains but refers to a
 * non-existent product and the productSlug is left empty.
 *
 * Please also note that creating an order is impossible if the product or product variant a line item relates to has been deleted.
 */
export type Commercetools_LineItemNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


/**
 * A line item is a snapshot of a product variant at the time it was added to the cart.
 *
 * Since a product variant may change at any time, the ProductVariant data is copied into the field variant.
 * The relation to the Product is kept but the line item will not automatically update if the product variant changes.
 * On the cart, the line item can be updated manually. The productSlug refers to the current version of the product.
 * It can be used to link to the product. If the product has been deleted, the line item remains but refers to a
 * non-existent product and the productSlug is left empty.
 *
 * Please also note that creating an order is impossible if the product or product variant a line item relates to has been deleted.
 */
export type Commercetools_LineItemProductSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_LineItemDraftOutput = {
  __typename?: 'Commercetools_LineItemDraftOutput';
  addedAt?: Maybe<Scalars['DateTime']['output']>;
  custom?: Maybe<Commercetools_CustomFieldsCommand>;
  distributionChannelResId?: Maybe<Commercetools_ResourceIdentifier>;
  externalPrice?: Maybe<Commercetools_BaseMoney>;
  externalTaxRate?: Maybe<Commercetools_ExternalTaxRateDraftOutput>;
  externalTotalPrice?: Maybe<Commercetools_ExternalLineItemTotalPrice>;
  inventoryMode?: Maybe<Commercetools_InventoryMode>;
  key?: Maybe<Scalars['String']['output']>;
  perMethodExternalTaxRate: Array<Commercetools_MethodExternalTaxRateDraftOutput>;
  productId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Commercetools_Long']['output']>;
  shippingDetails?: Maybe<Commercetools_ItemShippingDetailsDraftOutput>;
  sku?: Maybe<Scalars['String']['output']>;
  supplyChannelResId?: Maybe<Commercetools_ResourceIdentifier>;
  variantId?: Maybe<Scalars['Int']['output']>;
};

export enum Commercetools_LineItemMode {
  /**
   * The line item was added automatically, because a discount has added a free gift to the cart.
   * The quantity can not be increased, and it won’t be merged when the same product variant is added.
   * If the gift is removed, an entry is added to the "refusedGifts" array and the discount won’t be applied again
   * to the cart. The price can not be changed externally.
   * All other updates, such as the ones related to custom fields, can be used.
   */
  GiftLineItem = 'GiftLineItem',
  /**
   * The line item was added during cart creation or with the update action addLineItem. Its quantity can be
   * changed without restrictions.
   */
  Standard = 'Standard'
}

export enum Commercetools_LineItemPriceMode {
  /** The line item price was set externally. Cart discounts can apply to line items with this price mode. All update actions that change the quantity of a line item with this price mode require the externalPrice field to be given. */
  ExternalPrice = 'ExternalPrice',
  /** The line item price with the total was set externally. */
  ExternalTotal = 'ExternalTotal',
  /** The price is selected form the product variant. This is the default mode. */
  Platform = 'Platform'
}

export type Commercetools_LineItemReturnItem = Commercetools_ReturnItem & {
  __typename?: 'Commercetools_LineItemReturnItem';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  custom?: Maybe<Commercetools_CustomFieldsType>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lineItemId: Scalars['String']['output'];
  paymentState: Commercetools_ReturnPaymentState;
  quantity: Scalars['Commercetools_Long']['output'];
  shipmentState: Commercetools_ReturnShipmentState;
  type: Scalars['String']['output'];
};

export type Commercetools_LineItemStateTransition = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_LineItemStateTransition';
  fromState?: Maybe<Commercetools_State>;
  fromStateRef: Commercetools_Reference;
  lineItemId: Scalars['String']['output'];
  lineItemKey?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Commercetools_Long']['output'];
  toState?: Maybe<Commercetools_State>;
  toStateRef: Commercetools_Reference;
  transitionDate: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_LineItemsTarget = Commercetools_CartDiscountTarget & {
  __typename?: 'Commercetools_LineItemsTarget';
  predicate: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_LocalizableEnumAttributeDefinitionType = Commercetools_AttributeDefinitionType & {
  __typename?: 'Commercetools_LocalizableEnumAttributeDefinitionType';
  name: Scalars['String']['output'];
  values: Commercetools_LocalizableEnumValueTypeResult;
};


export type Commercetools_LocalizableEnumAttributeDefinitionTypeValuesArgs = {
  excludeKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  includeKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Commercetools_LocalizableEnumValueType = {
  __typename?: 'Commercetools_LocalizableEnumValueType';
  key: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  labelAllLocales: Array<Commercetools_LocalizedString>;
};


export type Commercetools_LocalizableEnumValueTypeLabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_LocalizableEnumValueTypeResult = {
  __typename?: 'Commercetools_LocalizableEnumValueTypeResult';
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  results: Array<Commercetools_LocalizableEnumValueType>;
  total: Scalars['Int']['output'];
};

export type Commercetools_LocalizableTextAttributeDefinitionType = Commercetools_AttributeDefinitionType & {
  __typename?: 'Commercetools_LocalizableTextAttributeDefinitionType';
  name: Scalars['String']['output'];
};

export type Commercetools_LocalizedEnumType = Commercetools_FieldType & {
  __typename?: 'Commercetools_LocalizedEnumType';
  name: Scalars['String']['output'];
  values: Array<Commercetools_LocalizedEnumValue>;
};

export type Commercetools_LocalizedEnumValue = {
  __typename?: 'Commercetools_LocalizedEnumValue';
  key: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  labelAllLocales: Array<Commercetools_LocalizedString>;
};


export type Commercetools_LocalizedEnumValueLabelArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_LocalizedString = {
  __typename?: 'Commercetools_LocalizedString';
  locale: Scalars['Commercetools_Locale']['output'];
  value: Scalars['String']['output'];
};

export type Commercetools_LocalizedStringType = Commercetools_FieldType & {
  __typename?: 'Commercetools_LocalizedStringType';
  name: Scalars['String']['output'];
};

export type Commercetools_Location = {
  __typename?: 'Commercetools_Location';
  country: Scalars['Commercetools_Country']['output'];
  state?: Maybe<Scalars['String']['output']>;
};

export type Commercetools_Message = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_Message';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  id: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  payload: Commercetools_MessagePayload;
  resourceRef: Commercetools_Reference;
  resourceVersion: Scalars['Commercetools_Long']['output'];
  sequenceNumber: Scalars['Commercetools_Long']['output'];
  type: Scalars['String']['output'];
  userProvidedIdentifiers?: Maybe<Commercetools_UserProvidedIdentifiers>;
  version: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_MessagePayload = {
  type: Scalars['String']['output'];
};

export type Commercetools_MessageSubscription = {
  __typename?: 'Commercetools_MessageSubscription';
  resourceTypeId: Scalars['String']['output'];
  types: Array<Scalars['String']['output']>;
};

export type Commercetools_MethodExternalTaxRateDraftOutput = {
  __typename?: 'Commercetools_MethodExternalTaxRateDraftOutput';
  shippingMethodKey: Scalars['String']['output'];
  taxRate?: Maybe<Commercetools_ExternalTaxRateDraftOutput>;
};

export type Commercetools_MethodTaxRate = {
  __typename?: 'Commercetools_MethodTaxRate';
  shippingMethodKey: Scalars['String']['output'];
  taxRate?: Maybe<Commercetools_TaxRate>;
};

export type Commercetools_MethodTaxedPrice = {
  __typename?: 'Commercetools_MethodTaxedPrice';
  shippingMethodKey: Scalars['String']['output'];
  taxedPrice?: Maybe<Commercetools_TaxedItemPrice>;
};

export type Commercetools_Money = Commercetools_BaseMoney & {
  __typename?: 'Commercetools_Money';
  centAmount: Scalars['Commercetools_Long']['output'];
  currencyCode: Scalars['Commercetools_Currency']['output'];
  /** For the `Money` it equals to the default number of fraction digits used with the currency. */
  fractionDigits: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_MoneyAttributeDefinitionType = Commercetools_AttributeDefinitionType & {
  __typename?: 'Commercetools_MoneyAttributeDefinitionType';
  name: Scalars['String']['output'];
};

export type Commercetools_MoneyType = Commercetools_FieldType & {
  __typename?: 'Commercetools_MoneyType';
  name: Scalars['String']['output'];
};

export type Commercetools_MultiBuyCustomLineItemsTarget = Commercetools_CartDiscountTarget & {
  __typename?: 'Commercetools_MultiBuyCustomLineItemsTarget';
  discountedQuantity: Scalars['Commercetools_Long']['output'];
  maxOccurrence?: Maybe<Scalars['Int']['output']>;
  predicate: Scalars['String']['output'];
  selectionMode: Commercetools_SelectionMode;
  triggerQuantity: Scalars['Commercetools_Long']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_MultiBuyLineItemsTarget = Commercetools_CartDiscountTarget & {
  __typename?: 'Commercetools_MultiBuyLineItemsTarget';
  discountedQuantity: Scalars['Commercetools_Long']['output'];
  maxOccurrence?: Maybe<Scalars['Int']['output']>;
  predicate: Scalars['String']['output'];
  selectionMode: Commercetools_SelectionMode;
  triggerQuantity: Scalars['Commercetools_Long']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_NestedAttributeDefinitionType = Commercetools_AttributeDefinitionType & {
  __typename?: 'Commercetools_NestedAttributeDefinitionType';
  name: Scalars['String']['output'];
  typeRef: Commercetools_Reference;
};

export type Commercetools_NotProcessed = Commercetools_OrderEditResult & {
  __typename?: 'Commercetools_NotProcessed';
  type: Scalars['String']['output'];
};

export type Commercetools_NotificationFormat = {
  type: Scalars['String']['output'];
};

export type Commercetools_NumberAttributeDefinitionType = Commercetools_AttributeDefinitionType & {
  __typename?: 'Commercetools_NumberAttributeDefinitionType';
  name: Scalars['String']['output'];
};

export type Commercetools_NumberType = Commercetools_FieldType & {
  __typename?: 'Commercetools_NumberType';
  name: Scalars['String']['output'];
};

/**
 * An order can be created from a cart, usually after a checkout process has been completed.
 * [documentation](https://docs.commercetools.com/api/projects/orders)
 */
export type Commercetools_Order = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_Order';
  anonymousId?: Maybe<Scalars['String']['output']>;
  billingAddress?: Maybe<Commercetools_Address>;
  businessUnit?: Maybe<Commercetools_BusinessUnit>;
  businessUnitRef?: Maybe<Commercetools_KeyReference>;
  cart?: Maybe<Commercetools_Cart>;
  cartRef?: Maybe<Commercetools_Reference>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  country?: Maybe<Scalars['Commercetools_Country']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  customLineItems: Array<Commercetools_CustomLineItem>;
  customer?: Maybe<Commercetools_Customer>;
  customerEmail?: Maybe<Scalars['String']['output']>;
  customerGroup?: Maybe<Commercetools_CustomerGroup>;
  customerGroupRef?: Maybe<Commercetools_Reference>;
  customerId?: Maybe<Scalars['String']['output']>;
  directDiscounts: Array<Commercetools_DirectDiscount>;
  discountCodes: Array<Commercetools_DiscountCodeInfo>;
  discountOnTotalPrice?: Maybe<Commercetools_DiscountOnTotalPrice>;
  id: Scalars['String']['output'];
  inventoryMode: Commercetools_InventoryMode;
  itemShippingAddresses: Array<Commercetools_Address>;
  /** @deprecated An internal field that should not be used in customer logic */
  lastMessageSequenceNumber: Scalars['Commercetools_Long']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  lineItems: Array<Commercetools_LineItem>;
  locale?: Maybe<Scalars['Commercetools_Locale']['output']>;
  orderNumber?: Maybe<Scalars['String']['output']>;
  orderState: Commercetools_OrderState;
  origin: Commercetools_CartOrigin;
  paymentInfo?: Maybe<Commercetools_PaymentInfo>;
  paymentState?: Maybe<Commercetools_PaymentState>;
  purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  quote?: Maybe<Commercetools_Quote>;
  quoteRef?: Maybe<Commercetools_Reference>;
  refusedGifts: Array<Commercetools_CartDiscount>;
  refusedGiftsRefs: Array<Commercetools_Reference>;
  returnInfo: Array<Commercetools_ReturnInfo>;
  shipmentState?: Maybe<Commercetools_ShipmentState>;
  shipping: Array<Commercetools_Shipping>;
  shippingAddress?: Maybe<Commercetools_Address>;
  shippingCustomFields?: Maybe<Commercetools_CustomFieldsType>;
  shippingInfo?: Maybe<Commercetools_ShippingInfo>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  shippingMode: Commercetools_ShippingMode;
  shippingRateInput?: Maybe<Commercetools_ShippingRateInput>;
  state?: Maybe<Commercetools_State>;
  stateRef?: Maybe<Commercetools_Reference>;
  store?: Maybe<Commercetools_Store>;
  storeRef?: Maybe<Commercetools_KeyReference>;
  syncInfo: Array<Commercetools_SyncInfo>;
  taxCalculationMode: Commercetools_TaxCalculationMode;
  taxMode: Commercetools_TaxMode;
  taxRoundingMode: Commercetools_RoundingMode;
  taxedPrice?: Maybe<Commercetools_TaxedPrice>;
  taxedShippingPrice?: Maybe<Commercetools_TaxedPrice>;
  totalPrice: Commercetools_Money;
  version: Scalars['Commercetools_Long']['output'];
};


/**
 * An order can be created from a cart, usually after a checkout process has been completed.
 * [documentation](https://docs.commercetools.com/api/projects/orders)
 */
export type Commercetools_OrderLineItemsArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Commercetools_OrderBillingAddressSet = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderBillingAddressSet';
  address?: Maybe<Commercetools_Address>;
  oldAddress?: Maybe<Commercetools_Address>;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderCreated = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderCreated';
  order: Commercetools_Order;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderCustomFieldAdded = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderCustomFieldAdded';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type Commercetools_OrderCustomFieldChanged = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderCustomFieldChanged';
  name: Scalars['String']['output'];
  previousValue?: Maybe<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Json']['output'];
};

export type Commercetools_OrderCustomFieldRemoved = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderCustomFieldRemoved';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_OrderCustomLineItemAdded = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderCustomLineItemAdded';
  customLineItem: Commercetools_CustomLineItem;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderCustomLineItemDiscountSet = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderCustomLineItemDiscountSet';
  customLineItemId: Scalars['String']['output'];
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  discountedPricePerQuantity: Array<Commercetools_DiscountedLineItemPriceForQuantity>;
  taxedPrice?: Maybe<Commercetools_TaxedItemPrice>;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderCustomLineItemQuantityChanged = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderCustomLineItemQuantityChanged';
  customLineItemId: Scalars['String']['output'];
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  oldQuantity?: Maybe<Scalars['Commercetools_Long']['output']>;
  quantity: Scalars['Commercetools_Long']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_OrderCustomLineItemRemoved = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderCustomLineItemRemoved';
  customLineItem?: Maybe<Commercetools_CustomLineItem>;
  customLineItemId: Scalars['String']['output'];
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderCustomTypeRemoved = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderCustomTypeRemoved';
  previousTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderCustomTypeSet = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderCustomTypeSet';
  customFields: Commercetools_CustomFieldsType;
  previousTypeId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderCustomerEmailSet = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderCustomerEmailSet';
  email?: Maybe<Scalars['String']['output']>;
  oldEmail?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderCustomerGroupSet = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderCustomerGroupSet';
  customerGroup?: Maybe<Commercetools_CustomerGroup>;
  customerGroupRef?: Maybe<Commercetools_Reference>;
  oldCustomerGroup?: Maybe<Commercetools_CustomerGroup>;
  oldCustomerGroupRef?: Maybe<Commercetools_Reference>;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderCustomerSet = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderCustomerSet';
  customer?: Maybe<Commercetools_Customer>;
  customerGroup?: Maybe<Commercetools_CustomerGroup>;
  customerGroupRef?: Maybe<Commercetools_Reference>;
  customerRef?: Maybe<Commercetools_Reference>;
  oldCustomer?: Maybe<Commercetools_Customer>;
  oldCustomerGroup?: Maybe<Commercetools_CustomerGroup>;
  oldCustomerGroupRef?: Maybe<Commercetools_Reference>;
  oldCustomerRef?: Maybe<Commercetools_Reference>;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderDeleted = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderDeleted';
  order?: Maybe<Commercetools_Order>;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderDiscountCodeAdded = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderDiscountCodeAdded';
  discountCode?: Maybe<Commercetools_DiscountCode>;
  discountCodeRef: Commercetools_Reference;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderDiscountCodeRemoved = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderDiscountCodeRemoved';
  discountCode?: Maybe<Commercetools_DiscountCode>;
  discountCodeRef: Commercetools_Reference;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderDiscountCodeStateSet = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderDiscountCodeStateSet';
  discountCode?: Maybe<Commercetools_DiscountCode>;
  discountCodeRef: Commercetools_Reference;
  oldState?: Maybe<Commercetools_DiscountCodeState>;
  state: Commercetools_DiscountCodeState;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderEdit = Commercetools_Versioned & {
  __typename?: 'Commercetools_OrderEdit';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  resource?: Maybe<Commercetools_Order>;
  resourceRef: Commercetools_Reference;
  result: Commercetools_OrderEditResult;
  stagedActions: Array<Commercetools_StagedOrderUpdateActionOutput>;
  version: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_OrderEditApplied = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderEditApplied';
  edit?: Maybe<Commercetools_OrderEdit>;
  editRef: Commercetools_Reference;
  result: Commercetools_Applied;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderEditResult = {
  type: Scalars['String']['output'];
};

export type Commercetools_OrderExcerpt = {
  __typename?: 'Commercetools_OrderExcerpt';
  taxedPrice?: Maybe<Commercetools_TaxedPrice>;
  totalPrice: Commercetools_Money;
  version?: Maybe<Scalars['Commercetools_Long']['output']>;
};

export type Commercetools_OrderImported = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderImported';
  order: Commercetools_Order;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderLineItemAdded = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderLineItemAdded';
  addedQuantity: Scalars['Commercetools_Long']['output'];
  lineItem: Commercetools_LineItem;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderLineItemDiscountSet = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderLineItemDiscountSet';
  discountedPricePerQuantity: Array<Commercetools_DiscountedLineItemPriceForQuantity>;
  lineItemId: Scalars['String']['output'];
  lineItemKey?: Maybe<Scalars['String']['output']>;
  taxedPrice?: Maybe<Commercetools_TaxedItemPrice>;
  taxedPricePortions: Array<Commercetools_MethodTaxedPrice>;
  totalPrice: Commercetools_Money;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderLineItemDistributionChannelSet = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderLineItemDistributionChannelSet';
  distributionChannel?: Maybe<Commercetools_Channel>;
  distributionChannelRef?: Maybe<Commercetools_Reference>;
  lineItemId: Scalars['String']['output'];
  lineItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderLineItemRemoved = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderLineItemRemoved';
  lineItemId: Scalars['String']['output'];
  lineItemKey?: Maybe<Scalars['String']['output']>;
  newPrice?: Maybe<Commercetools_ProductPrice>;
  newQuantity: Scalars['Commercetools_Long']['output'];
  newShippingDetails?: Maybe<Commercetools_ItemShippingDetails>;
  newState: Scalars['Commercetools_Set']['output'];
  newTaxedPrice?: Maybe<Commercetools_TaxedItemPrice>;
  newTotalPrice: Commercetools_Money;
  removedQuantity: Scalars['Commercetools_Long']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_OrderMessagePayload = {
  type: Scalars['String']['output'];
};

export type Commercetools_OrderPaymentAdded = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderPaymentAdded';
  paymentRef: Commercetools_Reference;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderPaymentRemoved = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderPaymentRemoved';
  paymentRef: Commercetools_Reference;
  removedPaymentInfo: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_OrderPaymentStateChanged = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderPaymentStateChanged';
  oldPaymentState?: Maybe<Commercetools_PaymentState>;
  paymentState: Commercetools_PaymentState;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderReturnShipmentStateChanged = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderReturnShipmentStateChanged';
  returnItemId: Scalars['String']['output'];
  returnShipmentState: Commercetools_ReturnShipmentState;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderShipmentStateChanged = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderShipmentStateChanged';
  oldShipmentState?: Maybe<Commercetools_ShipmentState>;
  shipmentState: Commercetools_ShipmentState;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderShippingAddressSet = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderShippingAddressSet';
  address?: Maybe<Commercetools_Address>;
  oldAddress?: Maybe<Commercetools_Address>;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderShippingInfoSet = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderShippingInfoSet';
  oldShippingInfo?: Maybe<Commercetools_ShippingInfo>;
  shippingInfo?: Maybe<Commercetools_ShippingInfo>;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderShippingRateInputSet = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderShippingRateInputSet';
  oldShippingRateInput?: Maybe<Commercetools_ShippingRateInput>;
  shippingRateInput?: Maybe<Commercetools_ShippingRateInput>;
  type: Scalars['String']['output'];
};

export enum Commercetools_OrderState {
  Cancelled = 'Cancelled',
  Complete = 'Complete',
  Confirmed = 'Confirmed',
  Open = 'Open'
}

export type Commercetools_OrderStateChanged = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderStateChanged';
  oldOrderState?: Maybe<Commercetools_OrderState>;
  orderId: Scalars['String']['output'];
  orderState: Commercetools_OrderState;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderStateTransition = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderStateTransition';
  force: Scalars['Boolean']['output'];
  oldState?: Maybe<Commercetools_State>;
  oldStateRef?: Maybe<Commercetools_Reference>;
  state?: Maybe<Commercetools_State>;
  stateRef: Commercetools_Reference;
  type: Scalars['String']['output'];
};

export type Commercetools_OrderStoreSet = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_OrderStoreSet';
  oldStore?: Maybe<Commercetools_Store>;
  oldStoreRef?: Maybe<Commercetools_KeyReference>;
  store?: Maybe<Commercetools_Store>;
  storeRef?: Maybe<Commercetools_KeyReference>;
  type: Scalars['String']['output'];
};

export type Commercetools_Parcel = {
  __typename?: 'Commercetools_Parcel';
  createdAt: Scalars['DateTime']['output'];
  custom?: Maybe<Commercetools_CustomFieldsType>;
  id: Scalars['String']['output'];
  items: Array<Commercetools_DeliveryItem>;
  key?: Maybe<Scalars['String']['output']>;
  measurements?: Maybe<Commercetools_ParcelMeasurements>;
  trackingData?: Maybe<Commercetools_TrackingData>;
};

export type Commercetools_ParcelAddedToDelivery = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_ParcelAddedToDelivery';
  delivery: Commercetools_Delivery;
  parcel: Commercetools_Parcel;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_ParcelData = {
  __typename?: 'Commercetools_ParcelData';
  custom?: Maybe<Commercetools_CustomFieldsCommand>;
  items: Array<Commercetools_DeliveryItem>;
  key?: Maybe<Scalars['String']['output']>;
  measurements?: Maybe<Commercetools_ParcelMeasurements>;
  trackingData?: Maybe<Commercetools_TrackingData>;
};

export type Commercetools_ParcelItemsUpdated = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_ParcelItemsUpdated';
  deliveryId: Scalars['String']['output'];
  items: Array<Commercetools_DeliveryItem>;
  oldItems: Array<Commercetools_DeliveryItem>;
  parcelId: Scalars['String']['output'];
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_ParcelMeasurements = {
  __typename?: 'Commercetools_ParcelMeasurements';
  heightInMillimeter?: Maybe<Scalars['Int']['output']>;
  lengthInMillimeter?: Maybe<Scalars['Int']['output']>;
  weightInGram?: Maybe<Scalars['Int']['output']>;
  widthInMillimeter?: Maybe<Scalars['Int']['output']>;
};

export type Commercetools_ParcelMeasurementsUpdated = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_ParcelMeasurementsUpdated';
  deliveryId: Scalars['String']['output'];
  measurements?: Maybe<Commercetools_ParcelMeasurements>;
  parcelId: Scalars['String']['output'];
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_ParcelRemovedFromDelivery = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_ParcelRemovedFromDelivery';
  deliveryId: Scalars['String']['output'];
  parcel: Commercetools_Parcel;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_ParcelTrackingDataUpdated = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_ParcelTrackingDataUpdated';
  deliveryId: Scalars['String']['output'];
  parcelId: Scalars['String']['output'];
  shippingKey?: Maybe<Scalars['String']['output']>;
  trackingData?: Maybe<Commercetools_TrackingData>;
  type: Scalars['String']['output'];
};

/**
 * Payments hold information about the current state of receiving and/or refunding money.
 * [documentation](https://docs.commercetools.com/api/projects/payments)
 */
export type Commercetools_Payment = Commercetools_Versioned & {
  __typename?: 'Commercetools_Payment';
  amountPlanned: Commercetools_Money;
  anonymousId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  customer?: Maybe<Commercetools_Customer>;
  customerRef?: Maybe<Commercetools_Reference>;
  id: Scalars['String']['output'];
  interfaceId?: Maybe<Scalars['String']['output']>;
  interfaceInteractionsRaw: Commercetools_InterfaceInteractionsRawResult;
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  paymentMethodInfo: Commercetools_PaymentMethodInfo;
  paymentStatus: Commercetools_PaymentStatus;
  transactions: Array<Commercetools_Transaction>;
  version: Scalars['Commercetools_Long']['output'];
};


/**
 * Payments hold information about the current state of receiving and/or refunding money.
 * [documentation](https://docs.commercetools.com/api/projects/payments)
 */
export type Commercetools_PaymentInterfaceInteractionsRawArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Commercetools_PaymentCreated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_PaymentCreated';
  payment: Commercetools_Payment;
  type: Scalars['String']['output'];
};

export type Commercetools_PaymentInfo = {
  __typename?: 'Commercetools_PaymentInfo';
  paymentRefs: Array<Commercetools_Reference>;
  payments: Array<Commercetools_Payment>;
};

export type Commercetools_PaymentInteractionAdded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_PaymentInteractionAdded';
  interaction: Commercetools_CustomFieldsType;
  type: Scalars['String']['output'];
};

export type Commercetools_PaymentMethodInfo = {
  __typename?: 'Commercetools_PaymentMethodInfo';
  method?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  paymentInterface?: Maybe<Scalars['String']['output']>;
};


export type Commercetools_PaymentMethodInfoNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export enum Commercetools_PaymentState {
  BalanceDue = 'BalanceDue',
  CreditOwed = 'CreditOwed',
  Failed = 'Failed',
  Paid = 'Paid',
  Pending = 'Pending'
}

export type Commercetools_PaymentStatus = {
  __typename?: 'Commercetools_PaymentStatus';
  interfaceCode?: Maybe<Scalars['String']['output']>;
  interfaceText?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Commercetools_State>;
  stateRef?: Maybe<Commercetools_Reference>;
};

export type Commercetools_PaymentStatusInterfaceCodeSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_PaymentStatusInterfaceCodeSet';
  interfaceCode?: Maybe<Scalars['String']['output']>;
  paymentId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_PaymentStatusStateTransition = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_PaymentStatusStateTransition';
  force: Scalars['Boolean']['output'];
  state?: Maybe<Commercetools_State>;
  stateRef?: Maybe<Commercetools_Reference>;
  type: Scalars['String']['output'];
};

export type Commercetools_PaymentTransactionAdded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_PaymentTransactionAdded';
  transaction: Commercetools_Transaction;
  type: Scalars['String']['output'];
};

export type Commercetools_PaymentTransactionStateChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_PaymentTransactionStateChanged';
  state: Commercetools_TransactionState;
  transactionId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export enum Commercetools_Permission {
  AcceptMyQuotes = 'AcceptMyQuotes',
  AcceptOthersQuotes = 'AcceptOthersQuotes',
  AddChildUnits = 'AddChildUnits',
  CreateApprovalRules = 'CreateApprovalRules',
  CreateMyCarts = 'CreateMyCarts',
  CreateMyOrdersFromMyCarts = 'CreateMyOrdersFromMyCarts',
  CreateMyOrdersFromMyQuotes = 'CreateMyOrdersFromMyQuotes',
  CreateMyQuoteRequestsFromMyCarts = 'CreateMyQuoteRequestsFromMyCarts',
  CreateOrdersFromOthersCarts = 'CreateOrdersFromOthersCarts',
  CreateOrdersFromOthersQuotes = 'CreateOrdersFromOthersQuotes',
  CreateOthersCarts = 'CreateOthersCarts',
  CreateQuoteRequestsFromOthersCarts = 'CreateQuoteRequestsFromOthersCarts',
  DeclineMyQuotes = 'DeclineMyQuotes',
  DeclineOthersQuotes = 'DeclineOthersQuotes',
  DeleteMyCarts = 'DeleteMyCarts',
  DeleteOthersCarts = 'DeleteOthersCarts',
  ReassignMyQuotes = 'ReassignMyQuotes',
  ReassignOthersQuotes = 'ReassignOthersQuotes',
  RenegotiateMyQuotes = 'RenegotiateMyQuotes',
  RenegotiateOthersQuotes = 'RenegotiateOthersQuotes',
  UpdateApprovalFlows = 'UpdateApprovalFlows',
  UpdateApprovalRules = 'UpdateApprovalRules',
  UpdateAssociates = 'UpdateAssociates',
  UpdateBusinessUnitDetails = 'UpdateBusinessUnitDetails',
  UpdateMyCarts = 'UpdateMyCarts',
  UpdateMyOrders = 'UpdateMyOrders',
  UpdateMyQuoteRequests = 'UpdateMyQuoteRequests',
  UpdateOthersCarts = 'UpdateOthersCarts',
  UpdateOthersOrders = 'UpdateOthersOrders',
  UpdateOthersQuoteRequests = 'UpdateOthersQuoteRequests',
  UpdateParentUnit = 'UpdateParentUnit',
  ViewMyCarts = 'ViewMyCarts',
  ViewMyOrders = 'ViewMyOrders',
  ViewMyQuoteRequests = 'ViewMyQuoteRequests',
  ViewMyQuotes = 'ViewMyQuotes',
  ViewOthersCarts = 'ViewOthersCarts',
  ViewOthersOrders = 'ViewOthersOrders',
  ViewOthersQuoteRequests = 'ViewOthersQuoteRequests',
  ViewOthersQuotes = 'ViewOthersQuotes'
}

export type Commercetools_PlainEnumValue = {
  __typename?: 'Commercetools_PlainEnumValue';
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type Commercetools_PlainEnumValueResult = {
  __typename?: 'Commercetools_PlainEnumValueResult';
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  results: Array<Commercetools_PlainEnumValue>;
  total: Scalars['Int']['output'];
};

export type Commercetools_PlatformFormat = Commercetools_NotificationFormat & {
  __typename?: 'Commercetools_PlatformFormat';
  type: Scalars['String']['output'];
};

export type Commercetools_Point = Commercetools_Geometry & {
  __typename?: 'Commercetools_Point';
  coordinates: Array<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_PreviewFailure = Commercetools_OrderEditResult & {
  __typename?: 'Commercetools_PreviewFailure';
  errors: Array<Scalars['Json']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_PreviewSuccess = Commercetools_OrderEditResult & {
  __typename?: 'Commercetools_PreviewSuccess';
  messagePayloads: Array<Commercetools_OrderMessagePayload>;
  preview: Commercetools_Order;
  type: Scalars['String']['output'];
};

export type Commercetools_PriceFunction = {
  __typename?: 'Commercetools_PriceFunction';
  currencyCode: Scalars['Commercetools_Currency']['output'];
  function: Scalars['String']['output'];
};

/**
 * This mode determines which type of Prices the system uses for
 * Product Price Selection as well as for LineItem Price selection
 */
export enum Commercetools_PriceMode {
  /** The system looks up prices from the `prices` field of the ProductVariant inside a Product. */
  Embedded = 'Embedded',
  /** The system looks up prices from Standalone Prices, stored separately from Products. */
  Standalone = 'Standalone'
}

export type Commercetools_Product = Commercetools_ReferenceExpandable & Commercetools_ReviewTarget & Commercetools_Versioned & {
  __typename?: 'Commercetools_Product';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  masterData: Commercetools_ProductCatalogData;
  priceMode?: Maybe<Commercetools_PriceMode>;
  productSelectionRefs: Commercetools_SelectionOfProductQueryResult;
  productType?: Maybe<Commercetools_ProductTypeDefinition>;
  productTypeRef: Commercetools_Reference;
  reviewRatingStatistics?: Maybe<Commercetools_ReviewRatingStatistics>;
  skus: Array<Scalars['String']['output']>;
  state?: Maybe<Commercetools_State>;
  stateRef?: Maybe<Commercetools_Reference>;
  taxCategory?: Maybe<Commercetools_TaxCategory>;
  taxCategoryRef?: Maybe<Commercetools_Reference>;
  version: Scalars['Commercetools_Long']['output'];
};


export type Commercetools_ProductProductSelectionRefsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type Commercetools_ProductAddedToCategory = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductAddedToCategory';
  category: Commercetools_ReferenceId;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_ProductCatalogData = {
  __typename?: 'Commercetools_ProductCatalogData';
  current?: Maybe<Commercetools_ProductData>;
  hasStagedChanges: Scalars['Boolean']['output'];
  published: Scalars['Boolean']['output'];
  staged?: Maybe<Commercetools_ProductData>;
};

export type Commercetools_ProductCreated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductCreated';
  productProjection: Commercetools_ProductProjectionMessagePayload;
  type: Scalars['String']['output'];
};

export type Commercetools_ProductData = {
  __typename?: 'Commercetools_ProductData';
  allVariants: Array<Commercetools_ProductVariant>;
  categories: Array<Commercetools_Category>;
  categoriesRef: Array<Commercetools_Reference>;
  categoryOrderHint?: Maybe<Scalars['String']['output']>;
  categoryOrderHints: Array<Commercetools_CategoryOrderHint>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  masterVariant: Commercetools_ProductVariant;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaDescriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaKeywordsAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  metaTitleAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<Commercetools_LocalizedString>;
  searchKeyword?: Maybe<Array<Commercetools_SearchKeyword>>;
  searchKeywords: Array<Commercetools_SearchKeywords>;
  skus: Array<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales: Array<Commercetools_LocalizedString>;
  variant?: Maybe<Commercetools_ProductVariant>;
  variants: Array<Commercetools_ProductVariant>;
};


export type Commercetools_ProductDataAllVariantsArgs = {
  hasImages?: InputMaybe<Scalars['Boolean']['input']>;
  isOnStock?: InputMaybe<Scalars['Boolean']['input']>;
  skus?: InputMaybe<Array<Scalars['String']['input']>>;
  stockChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type Commercetools_ProductDataCategoryOrderHintArgs = {
  categoryId: Scalars['String']['input'];
};


export type Commercetools_ProductDataDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductDataMetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductDataMetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductDataMetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductDataNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductDataSearchKeywordArgs = {
  locale: Scalars['Commercetools_Locale']['input'];
};


export type Commercetools_ProductDataSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductDataVariantArgs = {
  key?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};


export type Commercetools_ProductDataVariantsArgs = {
  hasImages?: InputMaybe<Scalars['Boolean']['input']>;
  isOnStock?: InputMaybe<Scalars['Boolean']['input']>;
  skus?: InputMaybe<Array<Scalars['String']['input']>>;
  stockChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Commercetools_ProductDeleted = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductDeleted';
  currentProjection?: Maybe<Commercetools_ProductProjectionMessagePayload>;
  removedImageUrls: Scalars['Commercetools_Set']['output'];
  type: Scalars['String']['output'];
};

/**
 *
 * A product price can be discounted in two ways:
 *
 * * with a relative or an absolute product discount, which will be automatically applied to all prices in a product that match a discount predicate.
 *   A relative discount reduces the matching price by a fraction (for example 10 % off). An absolute discount reduces the matching price by a fixed amount (for example 10€ off). If more than one product discount matches a price, the discount sort order determines which one will be applied.
 * * with an external product discount, which can then be used to explicitly set a discounted value on a particular product price.
 *
 * The discounted price is stored in the discounted field of the Product Price.
 *
 * Note that when a discount is created, updated or removed it can take up to 15 minutes to update all the prices with the discounts.
 *
 * The maximum number of ProductDiscounts that can be active at the same time is **200**.
 *
 */
export type Commercetools_ProductDiscount = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_ProductDiscount';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isValid: Scalars['Boolean']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<Commercetools_LocalizedString>;
  predicate: Scalars['String']['output'];
  referenceRefs: Array<Commercetools_Reference>;
  sortOrder: Scalars['String']['output'];
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
  value: Commercetools_ProductDiscountValue;
  version: Scalars['Commercetools_Long']['output'];
};


/**
 *
 * A product price can be discounted in two ways:
 *
 * * with a relative or an absolute product discount, which will be automatically applied to all prices in a product that match a discount predicate.
 *   A relative discount reduces the matching price by a fraction (for example 10 % off). An absolute discount reduces the matching price by a fixed amount (for example 10€ off). If more than one product discount matches a price, the discount sort order determines which one will be applied.
 * * with an external product discount, which can then be used to explicitly set a discounted value on a particular product price.
 *
 * The discounted price is stored in the discounted field of the Product Price.
 *
 * Note that when a discount is created, updated or removed it can take up to 15 minutes to update all the prices with the discounts.
 *
 * The maximum number of ProductDiscounts that can be active at the same time is **200**.
 *
 */
export type Commercetools_ProductDiscountDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


/**
 *
 * A product price can be discounted in two ways:
 *
 * * with a relative or an absolute product discount, which will be automatically applied to all prices in a product that match a discount predicate.
 *   A relative discount reduces the matching price by a fraction (for example 10 % off). An absolute discount reduces the matching price by a fixed amount (for example 10€ off). If more than one product discount matches a price, the discount sort order determines which one will be applied.
 * * with an external product discount, which can then be used to explicitly set a discounted value on a particular product price.
 *
 * The discounted price is stored in the discounted field of the Product Price.
 *
 * Note that when a discount is created, updated or removed it can take up to 15 minutes to update all the prices with the discounts.
 *
 * The maximum number of ProductDiscounts that can be active at the same time is **200**.
 *
 */
export type Commercetools_ProductDiscountNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_ProductDiscountValue = {
  type: Scalars['String']['output'];
};

export type Commercetools_ProductImageAdded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductImageAdded';
  image: Commercetools_Image;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type Commercetools_ProductOfSelection = {
  __typename?: 'Commercetools_ProductOfSelection';
  product?: Maybe<Commercetools_Product>;
  productRef: Commercetools_Reference;
  variantExclusion?: Maybe<Commercetools_ProductVariantExclusion>;
  variantSelection?: Maybe<Commercetools_ProductVariantSelection>;
};

export type Commercetools_ProductOfSelectionQueryResult = {
  __typename?: 'Commercetools_ProductOfSelectionQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<Commercetools_ProductOfSelection>;
  total: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_ProductPrice = {
  __typename?: 'Commercetools_ProductPrice';
  channel?: Maybe<Commercetools_Channel>;
  channelRef?: Maybe<Commercetools_Reference>;
  country?: Maybe<Scalars['Commercetools_Country']['output']>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  customerGroup?: Maybe<Commercetools_CustomerGroup>;
  customerGroupRef?: Maybe<Commercetools_Reference>;
  discounted?: Maybe<Commercetools_DiscountedProductPriceValue>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  tiers?: Maybe<Array<Commercetools_ProductPriceTier>>;
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
  value: Commercetools_BaseMoney;
};

export type Commercetools_ProductPriceAdded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductPriceAdded';
  price: Commercetools_ProductPrice;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type Commercetools_ProductPriceChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductPriceChanged';
  newPrice: Commercetools_ProductPrice;
  oldPrice: Commercetools_ProductPrice;
  oldStagedPrice?: Maybe<Commercetools_ProductPrice>;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type Commercetools_ProductPriceDiscountUpdateMessagePayload = {
  __typename?: 'Commercetools_ProductPriceDiscountUpdateMessagePayload';
  discounted?: Maybe<Commercetools_DiscountedProductPriceValue>;
  priceId: Scalars['String']['output'];
  sku?: Maybe<Scalars['String']['output']>;
  staged: Scalars['Boolean']['output'];
  variantId: Scalars['Int']['output'];
  variantKey?: Maybe<Scalars['String']['output']>;
};

export type Commercetools_ProductPriceDiscountsSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductPriceDiscountsSet';
  type: Scalars['String']['output'];
  updatedPrices: Array<Commercetools_ProductPriceDiscountUpdateMessagePayload>;
};

export type Commercetools_ProductPriceExternalDiscountSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductPriceExternalDiscountSet';
  discounted?: Maybe<Commercetools_DiscountedProductPriceValue>;
  priceId: Scalars['String']['output'];
  sku?: Maybe<Scalars['String']['output']>;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
  variantKey?: Maybe<Scalars['String']['output']>;
};

export type Commercetools_ProductPriceKeySet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductPriceKeySet';
  key?: Maybe<Scalars['String']['output']>;
  oldKey?: Maybe<Scalars['String']['output']>;
  priceId?: Maybe<Scalars['String']['output']>;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type Commercetools_ProductPriceModeSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductPriceModeSet';
  to?: Maybe<Commercetools_PriceMode>;
  type: Scalars['String']['output'];
};

export type Commercetools_ProductPriceRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductPriceRemoved';
  price: Commercetools_ProductPrice;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type Commercetools_ProductPriceTier = {
  __typename?: 'Commercetools_ProductPriceTier';
  minimumQuantity: Scalars['Int']['output'];
  value: Commercetools_BaseMoney;
};

export type Commercetools_ProductPricesSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductPricesSet';
  prices: Array<Commercetools_ProductPrice>;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variantId: Scalars['Int']['output'];
};

export type Commercetools_ProductProjectionMessagePayload = {
  __typename?: 'Commercetools_ProductProjectionMessagePayload';
  categories: Array<Commercetools_Category>;
  categoriesRef: Array<Commercetools_Reference>;
  categoryOrderHints: Array<Commercetools_CategoryOrderHint>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  hasStagedChanges: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  masterVariant: Commercetools_ProductVariant;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaDescriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaKeywordsAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  metaTitleAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<Commercetools_LocalizedString>;
  productType?: Maybe<Commercetools_ProductTypeDefinition>;
  productTypeRef: Commercetools_Reference;
  published: Scalars['Boolean']['output'];
  reviewRatingStatistics?: Maybe<Commercetools_ReviewRatingStatistics>;
  searchKeywords: Array<Commercetools_SearchKeywords>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales: Array<Commercetools_LocalizedString>;
  state?: Maybe<Commercetools_State>;
  stateRef?: Maybe<Commercetools_Reference>;
  taxCategory?: Maybe<Commercetools_TaxCategory>;
  taxCategoryRef?: Maybe<Commercetools_Reference>;
  variants: Array<Commercetools_ProductVariant>;
  version: Scalars['Commercetools_Long']['output'];
};


export type Commercetools_ProductProjectionMessagePayloadDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductProjectionMessagePayloadMetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductProjectionMessagePayloadMetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductProjectionMessagePayloadMetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductProjectionMessagePayloadNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductProjectionMessagePayloadSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_ProductPublished = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductPublished';
  productProjection: Commercetools_ProductProjectionMessagePayload;
  removedImageUrls: Array<Scalars['String']['output']>;
  scope: Commercetools_PublishScope;
  type: Scalars['String']['output'];
};

export type Commercetools_ProductReferenceIdentifier = {
  __typename?: 'Commercetools_ProductReferenceIdentifier';
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  typeId: Scalars['String']['output'];
};

export type Commercetools_ProductRemovedFromCategory = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductRemovedFromCategory';
  category: Commercetools_ReferenceId;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_ProductRevertedStagedChanges = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductRevertedStagedChanges';
  removedImageUrls: Scalars['Commercetools_Set']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_ProductSelection = Commercetools_Versioned & {
  __typename?: 'Commercetools_ProductSelection';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  mode: Commercetools_ProductSelectionMode;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<Commercetools_LocalizedString>;
  productCount: Scalars['Int']['output'];
  productRefs: Commercetools_ProductOfSelectionQueryResult;
  version: Scalars['Commercetools_Long']['output'];
};


export type Commercetools_ProductSelectionNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductSelectionProductRefsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<Scalars['String']['input']>;
};

export type Commercetools_ProductSelectionCreated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductSelectionCreated';
  productSelection: Commercetools_ProductSelection;
  type: Scalars['String']['output'];
};

export type Commercetools_ProductSelectionDeleted = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductSelectionDeleted';
  type: Scalars['String']['output'];
};

export enum Commercetools_ProductSelectionMode {
  /** Mode of Product Selection used to include a specific list of individual Products */
  Individual = 'Individual',
  /** Mode of Product Selection used to exclude a specific list of individual Products */
  IndividualExclusion = 'IndividualExclusion'
}

export type Commercetools_ProductSelectionProductAdded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductSelectionProductAdded';
  product?: Maybe<Commercetools_Product>;
  productRef: Commercetools_Reference;
  type: Scalars['String']['output'];
  variantSelection?: Maybe<Commercetools_ProductVariantSelection>;
};

export type Commercetools_ProductSelectionProductExcluded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductSelectionProductExcluded';
  product?: Maybe<Commercetools_Product>;
  productRef: Commercetools_Reference;
  type: Scalars['String']['output'];
  variantExclusion?: Maybe<Commercetools_ProductVariantExclusion>;
};

export type Commercetools_ProductSelectionProductRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductSelectionProductRemoved';
  product?: Maybe<Commercetools_Product>;
  productRef: Commercetools_Reference;
  type: Scalars['String']['output'];
};

export type Commercetools_ProductSelectionSetting = {
  __typename?: 'Commercetools_ProductSelectionSetting';
  active: Scalars['Boolean']['output'];
  productSelection?: Maybe<Commercetools_ProductSelection>;
  productSelectionRef: Commercetools_Reference;
};

export type Commercetools_ProductSelectionVariantExclusionChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductSelectionVariantExclusionChanged';
  newVariantExclusion?: Maybe<Commercetools_ProductVariantExclusion>;
  oldVariantExclusion?: Maybe<Commercetools_ProductVariantExclusion>;
  product?: Maybe<Commercetools_Product>;
  productRef: Commercetools_Reference;
  type: Scalars['String']['output'];
};

export type Commercetools_ProductSelectionVariantSelectionChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductSelectionVariantSelectionChanged';
  newVariantSelection?: Maybe<Commercetools_ProductVariantSelection>;
  oldVariantSelection?: Maybe<Commercetools_ProductVariantSelection>;
  product?: Maybe<Commercetools_Product>;
  productRef: Commercetools_Reference;
  type: Scalars['String']['output'];
};

export type Commercetools_ProductSlugChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductSlugChanged';
  oldSlug?: Maybe<Scalars['String']['output']>;
  oldSlugAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales: Array<Commercetools_LocalizedString>;
  type: Scalars['String']['output'];
};


export type Commercetools_ProductSlugChangedOldSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductSlugChangedSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_ProductStateTransition = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductStateTransition';
  force: Scalars['Boolean']['output'];
  state?: Maybe<Commercetools_State>;
  stateRef: Commercetools_Reference;
  type: Scalars['String']['output'];
};

export type Commercetools_ProductTailoring = Commercetools_Versioned & {
  __typename?: 'Commercetools_ProductTailoring';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  current?: Maybe<Commercetools_ProductTailoringData>;
  hasStagedChanges: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  product?: Maybe<Commercetools_Product>;
  productRef: Commercetools_Reference;
  published: Scalars['Boolean']['output'];
  staged?: Maybe<Commercetools_ProductTailoringData>;
  store?: Maybe<Commercetools_Store>;
  storeRef: Commercetools_KeyReference;
  version: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_ProductTailoringCreated = Commercetools_HasProductTailoringData & Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductTailoringCreated';
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  key?: Maybe<Scalars['String']['output']>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaDescriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaKeywordsAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  metaTitleAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: Commercetools_Reference;
  publish: Scalars['Boolean']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  storeRef: Commercetools_KeyReference;
  type: Scalars['String']['output'];
};


export type Commercetools_ProductTailoringCreatedDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductTailoringCreatedMetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductTailoringCreatedMetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductTailoringCreatedMetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductTailoringCreatedNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductTailoringCreatedSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_ProductTailoringData = Commercetools_HasProductTailoringData & {
  __typename?: 'Commercetools_ProductTailoringData';
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaDescriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaKeywordsAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  metaTitleAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
};


export type Commercetools_ProductTailoringDataDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductTailoringDataMetaDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductTailoringDataMetaKeywordsArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductTailoringDataMetaTitleArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductTailoringDataNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductTailoringDataSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_ProductTailoringDeleted = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductTailoringDeleted';
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: Commercetools_Reference;
  storeRef: Commercetools_KeyReference;
  type: Scalars['String']['output'];
};

export type Commercetools_ProductTailoringDescriptionSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductTailoringDescriptionSet';
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  oldDescription?: Maybe<Scalars['String']['output']>;
  oldDescriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: Commercetools_Reference;
  storeRef: Commercetools_KeyReference;
  type: Scalars['String']['output'];
};


export type Commercetools_ProductTailoringDescriptionSetDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductTailoringDescriptionSetOldDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_ProductTailoringNameSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductTailoringNameSet';
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  oldName?: Maybe<Scalars['String']['output']>;
  oldNameAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: Commercetools_Reference;
  storeRef: Commercetools_KeyReference;
  type: Scalars['String']['output'];
};


export type Commercetools_ProductTailoringNameSetNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductTailoringNameSetOldNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_ProductTailoringPublished = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductTailoringPublished';
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: Commercetools_Reference;
  storeRef: Commercetools_KeyReference;
  type: Scalars['String']['output'];
};

export type Commercetools_ProductTailoringSlugSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductTailoringSlugSet';
  oldSlug?: Maybe<Scalars['String']['output']>;
  oldSlugAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: Commercetools_Reference;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  storeRef: Commercetools_KeyReference;
  type: Scalars['String']['output'];
};


export type Commercetools_ProductTailoringSlugSetOldSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ProductTailoringSlugSetSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_ProductTailoringUnpublished = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductTailoringUnpublished';
  productKey?: Maybe<Scalars['String']['output']>;
  productRef: Commercetools_Reference;
  storeRef: Commercetools_KeyReference;
  type: Scalars['String']['output'];
};

export type Commercetools_ProductTypeDefinition = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_ProductTypeDefinition';
  attributeDefinitions: Commercetools_AttributeDefinitionResult;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  name: Scalars['String']['output'];
  version: Scalars['Commercetools_Long']['output'];
};


export type Commercetools_ProductTypeDefinitionAttributeDefinitionsArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']['input']>>;
  includeNames?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Commercetools_ProductUnpublished = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductUnpublished';
  type: Scalars['String']['output'];
};

export type Commercetools_ProductVariant = {
  __typename?: 'Commercetools_ProductVariant';
  assets: Array<Commercetools_Asset>;
  /** This field contains raw attributes data */
  attributesRaw: Array<Commercetools_RawProductAttribute>;
  availability?: Maybe<Commercetools_ProductVariantAvailabilityWithChannels>;
  id: Scalars['Int']['output'];
  images: Array<Commercetools_Image>;
  key?: Maybe<Scalars['String']['output']>;
  /** Returns a single price based on the price selection rules. */
  price?: Maybe<Commercetools_ProductPrice>;
  prices?: Maybe<Array<Commercetools_ProductPrice>>;
  sku?: Maybe<Scalars['String']['output']>;
};


export type Commercetools_ProductVariantAttributesRawArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']['input']>>;
  includeNames?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type Commercetools_ProductVariantPriceArgs = {
  channelId?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['Commercetools_Country']['input']>;
  currency: Scalars['Commercetools_Currency']['input'];
  customerGroupId?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Commercetools_ProductVariantAdded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductVariantAdded';
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  variant: Commercetools_ProductVariant;
};

/** Product variant availabilities */
export type Commercetools_ProductVariantAvailabilitiesResult = {
  __typename?: 'Commercetools_ProductVariantAvailabilitiesResult';
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  results: Array<Commercetools_ProductVariantAvailabilityWithChannel>;
  total: Scalars['Int']['output'];
};

/** Product variant availability */
export type Commercetools_ProductVariantAvailability = {
  __typename?: 'Commercetools_ProductVariantAvailability';
  availableQuantity?: Maybe<Scalars['Commercetools_Long']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isOnStock: Scalars['Boolean']['output'];
  restockableInDays?: Maybe<Scalars['Int']['output']>;
  version?: Maybe<Scalars['Commercetools_Long']['output']>;
};

export type Commercetools_ProductVariantAvailabilityWithChannel = {
  __typename?: 'Commercetools_ProductVariantAvailabilityWithChannel';
  availability: Commercetools_ProductVariantAvailability;
  channel?: Maybe<Commercetools_Channel>;
  channelRef: Commercetools_Reference;
};

export type Commercetools_ProductVariantAvailabilityWithChannels = {
  __typename?: 'Commercetools_ProductVariantAvailabilityWithChannels';
  channels: Commercetools_ProductVariantAvailabilitiesResult;
  noChannel?: Maybe<Commercetools_ProductVariantAvailability>;
};


export type Commercetools_ProductVariantAvailabilityWithChannelsChannelsArgs = {
  excludeChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Commercetools_ProductVariantDeleted = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ProductVariantDeleted';
  removedImageUrls: Scalars['Commercetools_Set']['output'];
  staged?: Maybe<Scalars['Boolean']['output']>;
  type: Scalars['String']['output'];
  variant?: Maybe<Commercetools_ProductVariant>;
};

export type Commercetools_ProductVariantExclusion = {
  __typename?: 'Commercetools_ProductVariantExclusion';
  skus: Array<Scalars['String']['output']>;
};

export type Commercetools_ProductVariantSelection = {
  skus: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_ProductVariantSelectionIncludeAllExcept = Commercetools_ProductVariantSelection & {
  __typename?: 'Commercetools_ProductVariantSelectionIncludeAllExcept';
  skus: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_ProductVariantSelectionIncludeOnly = Commercetools_ProductVariantSelection & {
  __typename?: 'Commercetools_ProductVariantSelectionIncludeOnly';
  skus: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export enum Commercetools_PublishScope {
  /** Publishes the complete staged projection */
  All = 'All',
  /** Publishes only prices on the staged projection */
  Prices = 'Prices'
}

export type Commercetools_PurchaseOrderNumberSet = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_PurchaseOrderNumberSet';
  oldPurchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_Quote = Commercetools_Versioned & {
  __typename?: 'Commercetools_Quote';
  billingAddress?: Maybe<Commercetools_Address>;
  businessUnit?: Maybe<Commercetools_BusinessUnit>;
  businessUnitRef?: Maybe<Commercetools_KeyReference>;
  buyerComment?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['Commercetools_Country']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  customLineItems: Array<Commercetools_CustomLineItem>;
  customer?: Maybe<Commercetools_Customer>;
  customerGroup?: Maybe<Commercetools_CustomerGroup>;
  customerGroupRef?: Maybe<Commercetools_Reference>;
  customerRef?: Maybe<Commercetools_Reference>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  directDiscounts: Array<Commercetools_DirectDiscount>;
  id: Scalars['String']['output'];
  inventoryMode: Commercetools_InventoryMode;
  itemShippingAddresses: Array<Commercetools_Address>;
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  lineItems: Array<Commercetools_LineItem>;
  paymentInfo?: Maybe<Commercetools_PaymentInfo>;
  purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  quoteRequest?: Maybe<Commercetools_QuoteRequest>;
  quoteRequestRef: Commercetools_Reference;
  quoteState: Commercetools_QuoteState;
  sellerComment?: Maybe<Scalars['String']['output']>;
  shippingAddress?: Maybe<Commercetools_Address>;
  shippingInfo?: Maybe<Commercetools_ShippingInfo>;
  shippingRateInput?: Maybe<Commercetools_ShippingRateInput>;
  stagedQuote?: Maybe<Commercetools_StagedQuote>;
  stagedQuoteRef: Commercetools_Reference;
  state?: Maybe<Commercetools_State>;
  stateRef?: Maybe<Commercetools_Reference>;
  store?: Maybe<Commercetools_Store>;
  storeRef?: Maybe<Commercetools_KeyReference>;
  taxCalculationMode: Commercetools_TaxCalculationMode;
  taxMode: Commercetools_TaxMode;
  taxRoundingMode: Commercetools_RoundingMode;
  taxedPrice?: Maybe<Commercetools_TaxedPrice>;
  totalPrice: Commercetools_Money;
  validTo?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Commercetools_Long']['output'];
};


export type Commercetools_QuoteLineItemsArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Commercetools_QuoteCreated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_QuoteCreated';
  quote: Commercetools_Quote;
  type: Scalars['String']['output'];
};

export type Commercetools_QuoteCustomerChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_QuoteCustomerChanged';
  customer?: Maybe<Commercetools_Customer>;
  customerRef: Commercetools_Reference;
  previousCustomer?: Maybe<Commercetools_Customer>;
  previousCustomerRef: Commercetools_Reference;
  type: Scalars['String']['output'];
};

export type Commercetools_QuoteDeleted = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_QuoteDeleted';
  type: Scalars['String']['output'];
};

export type Commercetools_QuoteRenegotiationRequested = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_QuoteRenegotiationRequested';
  buyerComment?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_QuoteRequest = Commercetools_Versioned & {
  __typename?: 'Commercetools_QuoteRequest';
  billingAddress?: Maybe<Commercetools_Address>;
  businessUnit?: Maybe<Commercetools_BusinessUnit>;
  businessUnitRef?: Maybe<Commercetools_KeyReference>;
  cartRef?: Maybe<Commercetools_Reference>;
  comment?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['Commercetools_Country']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  customLineItems: Array<Commercetools_CustomLineItem>;
  customer?: Maybe<Commercetools_Customer>;
  customerGroup?: Maybe<Commercetools_CustomerGroup>;
  customerGroupRef?: Maybe<Commercetools_Reference>;
  customerRef?: Maybe<Commercetools_Reference>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  directDiscounts: Array<Commercetools_DirectDiscount>;
  id: Scalars['String']['output'];
  inventoryMode: Commercetools_InventoryMode;
  itemShippingAddresses: Array<Commercetools_Address>;
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  lineItems: Array<Commercetools_LineItem>;
  paymentInfo?: Maybe<Commercetools_PaymentInfo>;
  purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  quoteRequestState: Commercetools_QuoteRequestState;
  shippingAddress?: Maybe<Commercetools_Address>;
  shippingInfo?: Maybe<Commercetools_ShippingInfo>;
  shippingRateInput?: Maybe<Commercetools_ShippingRateInput>;
  state?: Maybe<Commercetools_State>;
  stateRef?: Maybe<Commercetools_Reference>;
  store?: Maybe<Commercetools_Store>;
  storeRef?: Maybe<Commercetools_KeyReference>;
  taxCalculationMode: Commercetools_TaxCalculationMode;
  taxMode: Commercetools_TaxMode;
  taxRoundingMode: Commercetools_RoundingMode;
  taxedPrice?: Maybe<Commercetools_TaxedPrice>;
  totalPrice: Commercetools_Money;
  version: Scalars['Commercetools_Long']['output'];
};


export type Commercetools_QuoteRequestLineItemsArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Commercetools_QuoteRequestCreated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_QuoteRequestCreated';
  quoteRequest: Commercetools_QuoteRequest;
  type: Scalars['String']['output'];
};

export type Commercetools_QuoteRequestCustomerChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_QuoteRequestCustomerChanged';
  customer?: Maybe<Commercetools_Customer>;
  customerRef: Commercetools_Reference;
  previousCustomer?: Maybe<Commercetools_Customer>;
  previousCustomerRef: Commercetools_Reference;
  type: Scalars['String']['output'];
};

export type Commercetools_QuoteRequestDeleted = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_QuoteRequestDeleted';
  type: Scalars['String']['output'];
};

export enum Commercetools_QuoteRequestState {
  Accepted = 'Accepted',
  Cancelled = 'Cancelled',
  Closed = 'Closed',
  Rejected = 'Rejected',
  Submitted = 'Submitted',
  UnderReview = 'UnderReview'
}

export type Commercetools_QuoteRequestStateChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_QuoteRequestStateChanged';
  oldQuoteRequestState: Commercetools_QuoteRequestState;
  quoteRequestState: Commercetools_QuoteRequestState;
  type: Scalars['String']['output'];
};

export type Commercetools_QuoteRequestStateTransition = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_QuoteRequestStateTransition';
  force: Scalars['Boolean']['output'];
  oldState?: Maybe<Commercetools_State>;
  oldStateRef?: Maybe<Commercetools_Reference>;
  state?: Maybe<Commercetools_State>;
  stateRef: Commercetools_Reference;
  type: Scalars['String']['output'];
};

export enum Commercetools_QuoteState {
  Accepted = 'Accepted',
  Declined = 'Declined',
  DeclinedForRenegotiation = 'DeclinedForRenegotiation',
  Pending = 'Pending',
  RenegotiationAddressed = 'RenegotiationAddressed',
  Withdrawn = 'Withdrawn'
}

export type Commercetools_QuoteStateChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_QuoteStateChanged';
  oldQuoteState: Commercetools_QuoteState;
  quoteState: Commercetools_QuoteState;
  type: Scalars['String']['output'];
};

export type Commercetools_QuoteStateTransition = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_QuoteStateTransition';
  force: Scalars['Boolean']['output'];
  oldState?: Maybe<Commercetools_State>;
  oldStateRef?: Maybe<Commercetools_Reference>;
  state?: Maybe<Commercetools_State>;
  stateRef: Commercetools_Reference;
  type: Scalars['String']['output'];
};

export type Commercetools_RawCustomField = {
  __typename?: 'Commercetools_RawCustomField';
  name: Scalars['String']['output'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResource?: Maybe<Commercetools_ReferenceExpandable>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResourceSet: Array<Commercetools_ReferenceExpandable>;
  value: Scalars['Json']['output'];
};

export type Commercetools_RawProductAttribute = {
  __typename?: 'Commercetools_RawProductAttribute';
  attributeDefinition?: Maybe<Commercetools_AttributeDefinition>;
  name: Scalars['String']['output'];
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResource?: Maybe<Commercetools_ReferenceExpandable>;
  /** BETA: This feature can be subject to change and should be used carefully in production. https://docs.commercetools.com/api/contract#public-beta */
  referencedResourceSet: Array<Commercetools_ReferenceExpandable>;
  value: Scalars['Json']['output'];
};

export type Commercetools_Reference = {
  __typename?: 'Commercetools_Reference';
  id: Scalars['String']['output'];
  typeId: Scalars['String']['output'];
};

export type Commercetools_ReferenceAttributeDefinitionType = Commercetools_AttributeDefinitionType & {
  __typename?: 'Commercetools_ReferenceAttributeDefinitionType';
  name: Scalars['String']['output'];
  referenceTypeId: Scalars['String']['output'];
};

export type Commercetools_ReferenceExpandable = {
  id: Scalars['String']['output'];
};

export type Commercetools_ReferenceId = {
  __typename?: 'Commercetools_ReferenceId';
  id: Scalars['String']['output'];
  typeId: Scalars['String']['output'];
};

export type Commercetools_ReferenceType = Commercetools_FieldType & {
  __typename?: 'Commercetools_ReferenceType';
  name: Scalars['String']['output'];
  referenceTypeId: Scalars['String']['output'];
};

export type Commercetools_RelativeDiscountValue = Commercetools_CartDiscountValue & Commercetools_ProductDiscountValue & {
  __typename?: 'Commercetools_RelativeDiscountValue';
  permyriad: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_RemoveStagedOrderCustomLineItemOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_RemoveStagedOrderCustomLineItemOutput';
  customLineItemId?: Maybe<Scalars['String']['output']>;
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_RemoveStagedOrderDeliveryOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_RemoveStagedOrderDeliveryOutput';
  deliveryId?: Maybe<Scalars['String']['output']>;
  deliveryKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_RemoveStagedOrderDiscountCodeOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_RemoveStagedOrderDiscountCodeOutput';
  discountCode?: Maybe<Commercetools_DiscountCode>;
  discountCodeRef: Commercetools_Reference;
  type: Scalars['String']['output'];
};

export type Commercetools_RemoveStagedOrderItemShippingAddressOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_RemoveStagedOrderItemShippingAddressOutput';
  addressKey: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_RemoveStagedOrderLineItemOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_RemoveStagedOrderLineItemOutput';
  externalPrice?: Maybe<Commercetools_BaseMoney>;
  externalTotalPrice?: Maybe<Commercetools_ExternalLineItemTotalPrice>;
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Commercetools_Long']['output']>;
  shippingDetailsToRemove?: Maybe<Commercetools_ItemShippingDetailsDraftOutput>;
  type: Scalars['String']['output'];
};

export type Commercetools_RemoveStagedOrderParcelFromDeliveryOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_RemoveStagedOrderParcelFromDeliveryOutput';
  parcelId?: Maybe<Scalars['String']['output']>;
  parcelKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_RemoveStagedOrderPaymentOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_RemoveStagedOrderPaymentOutput';
  paymentResId: Commercetools_ResourceIdentifier;
  type: Scalars['String']['output'];
};

export type Commercetools_ResourceIdentifier = {
  __typename?: 'Commercetools_ResourceIdentifier';
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  typeId: Scalars['String']['output'];
};

/** Stores information about returns connected to this order. */
export type Commercetools_ReturnInfo = {
  __typename?: 'Commercetools_ReturnInfo';
  items: Array<Commercetools_ReturnItem>;
  returnDate?: Maybe<Scalars['DateTime']['output']>;
  returnTrackingId?: Maybe<Scalars['String']['output']>;
};

export type Commercetools_ReturnInfoAdded = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_ReturnInfoAdded';
  returnInfo: Commercetools_ReturnInfo;
  type: Scalars['String']['output'];
};

export type Commercetools_ReturnInfoDraftTypeOutput = {
  __typename?: 'Commercetools_ReturnInfoDraftTypeOutput';
  items: Array<Commercetools_ReturnItemDraftTypeOutput>;
  returnDate?: Maybe<Scalars['DateTime']['output']>;
  returnTrackingId?: Maybe<Scalars['String']['output']>;
};

export type Commercetools_ReturnInfoSet = Commercetools_MessagePayload & Commercetools_OrderMessagePayload & {
  __typename?: 'Commercetools_ReturnInfoSet';
  returnInfo?: Maybe<Array<Commercetools_ReturnInfo>>;
  type: Scalars['String']['output'];
};

export type Commercetools_ReturnItem = {
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  custom?: Maybe<Commercetools_CustomFieldsType>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  paymentState: Commercetools_ReturnPaymentState;
  quantity: Scalars['Commercetools_Long']['output'];
  shipmentState: Commercetools_ReturnShipmentState;
  type: Scalars['String']['output'];
};

export type Commercetools_ReturnItemDraftTypeOutput = {
  __typename?: 'Commercetools_ReturnItemDraftTypeOutput';
  comment?: Maybe<Scalars['String']['output']>;
  custom?: Maybe<Commercetools_CustomFieldsCommand>;
  customLineItemId?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lineItemId?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Commercetools_Long']['output'];
  shipmentState: Commercetools_ReturnShipmentState;
};

export enum Commercetools_ReturnPaymentState {
  Initial = 'Initial',
  NonRefundable = 'NonRefundable',
  NotRefunded = 'NotRefunded',
  Refunded = 'Refunded'
}

export enum Commercetools_ReturnShipmentState {
  Advised = 'Advised',
  BackInStock = 'BackInStock',
  Returned = 'Returned',
  Unusable = 'Unusable'
}

export type Commercetools_Review = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_Review';
  authorName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  customer?: Maybe<Commercetools_Customer>;
  customerRef?: Maybe<Commercetools_Reference>;
  id: Scalars['String']['output'];
  includedInStatistics: Scalars['Boolean']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  locale?: Maybe<Scalars['Commercetools_Locale']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<Commercetools_State>;
  stateRef?: Maybe<Commercetools_Reference>;
  target?: Maybe<Commercetools_ReviewTarget>;
  targetRef?: Maybe<Commercetools_Reference>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  uniquenessValue?: Maybe<Scalars['String']['output']>;
  version: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_ReviewCreated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ReviewCreated';
  review: Commercetools_Review;
  type: Scalars['String']['output'];
};

export type Commercetools_ReviewRatingSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ReviewRatingSet';
  includedInStatistics: Scalars['Boolean']['output'];
  newRating?: Maybe<Scalars['Int']['output']>;
  oldRating?: Maybe<Scalars['Int']['output']>;
  target?: Maybe<Commercetools_ReviewTarget>;
  targetRef?: Maybe<Commercetools_Reference>;
  type: Scalars['String']['output'];
};

export type Commercetools_ReviewRatingStatistics = {
  __typename?: 'Commercetools_ReviewRatingStatistics';
  averageRating: Scalars['Float']['output'];
  count: Scalars['Commercetools_Long']['output'];
  highestRating: Scalars['Int']['output'];
  lowestRating: Scalars['Int']['output'];
  ratingsDistribution: Scalars['Json']['output'];
};

export type Commercetools_ReviewStateTransition = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_ReviewStateTransition';
  force: Scalars['Boolean']['output'];
  newIncludedInStatistics: Scalars['Boolean']['output'];
  newState?: Maybe<Commercetools_State>;
  newStateRef: Commercetools_Reference;
  oldIncludedInStatistics: Scalars['Boolean']['output'];
  oldState?: Maybe<Commercetools_State>;
  oldStateRef?: Maybe<Commercetools_Reference>;
  target?: Maybe<Commercetools_ReviewTarget>;
  targetRef?: Maybe<Commercetools_Reference>;
  type: Scalars['String']['output'];
};

export type Commercetools_ReviewTarget = {
  id: Scalars['String']['output'];
};

export enum Commercetools_RoundingMode {
  /** [Round half down](https://en.wikipedia.org/wiki/Rounding#Round_half_down) */
  HalfDown = 'HalfDown',
  /** [Round half to even](https://en.wikipedia.org/wiki/Rounding#Round_half_to_even). Default rounding mode as used in IEEE 754 computing functions and operators. */
  HalfEven = 'HalfEven',
  /** [Round half up](https://en.wikipedia.org/wiki/Rounding#Round_half_up) */
  HalfUp = 'HalfUp'
}

export type Commercetools_RuleApprover = {
  __typename?: 'Commercetools_RuleApprover';
  associateRole: Commercetools_AssociateRole;
  associateRoleRef: Commercetools_KeyReference;
};

export type Commercetools_RuleRequester = {
  __typename?: 'Commercetools_RuleRequester';
  associateRole: Commercetools_AssociateRole;
  associateRoleRef: Commercetools_KeyReference;
};

export type Commercetools_SnsDestination = Commercetools_Destination & {
  __typename?: 'Commercetools_SNSDestination';
  accessKey?: Maybe<Scalars['String']['output']>;
  accessSecret?: Maybe<Scalars['String']['output']>;
  authenticationMode: Commercetools_AwsAuthenticationMode;
  topicArn: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_SqsDestination = Commercetools_Destination & {
  __typename?: 'Commercetools_SQSDestination';
  accessKey?: Maybe<Scalars['String']['output']>;
  accessSecret?: Maybe<Scalars['String']['output']>;
  authenticationMode: Commercetools_AwsAuthenticationMode;
  queueUrl: Scalars['String']['output'];
  region: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_ScoreShippingRateInput = Commercetools_ShippingRateInput & {
  __typename?: 'Commercetools_ScoreShippingRateInput';
  score: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_ScoreShippingRateInputDraftOutput = Commercetools_ShippingRateInputDraftOutput & {
  __typename?: 'Commercetools_ScoreShippingRateInputDraftOutput';
  score: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_SearchKeyword = {
  __typename?: 'Commercetools_SearchKeyword';
  suggestTokenizer?: Maybe<Commercetools_SuggestTokenizer>;
  text: Scalars['String']['output'];
};

export type Commercetools_SearchKeywords = {
  __typename?: 'Commercetools_SearchKeywords';
  locale: Scalars['Commercetools_Locale']['output'];
  searchKeywords: Array<Commercetools_SearchKeyword>;
};

/** In order to decide which of the matching items will actually be discounted */
export enum Commercetools_SelectionMode {
  Cheapest = 'Cheapest',
  MostExpensive = 'MostExpensive'
}

export type Commercetools_SelectionOfProduct = {
  __typename?: 'Commercetools_SelectionOfProduct';
  createdAt: Scalars['DateTime']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  productSelection?: Maybe<Commercetools_ProductSelection>;
  productSelectionRef: Commercetools_Reference;
  variantExclusion?: Maybe<Commercetools_ProductVariantExclusion>;
  variantSelection?: Maybe<Commercetools_ProductVariantSelection>;
};

export type Commercetools_SelectionOfProductQueryResult = {
  __typename?: 'Commercetools_SelectionOfProductQueryResult';
  count: Scalars['Int']['output'];
  exists: Scalars['Boolean']['output'];
  offset: Scalars['Int']['output'];
  results: Array<Commercetools_SelectionOfProduct>;
  total: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_SetAttributeDefinitionType = Commercetools_AttributeDefinitionType & {
  __typename?: 'Commercetools_SetAttributeDefinitionType';
  elementType: Commercetools_AttributeDefinitionType;
  name: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderBillingAddressCustomFieldOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderBillingAddressCustomFieldOutput';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type Commercetools_SetStagedOrderBillingAddressCustomTypeOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderBillingAddressCustomTypeOutput';
  custom: Commercetools_CustomFieldsCommand;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderBillingAddressOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderBillingAddressOutput';
  address?: Maybe<Commercetools_AddressDraft>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderCountryOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderCountryOutput';
  country?: Maybe<Scalars['Commercetools_Country']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderCustomFieldOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderCustomFieldOutput';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type Commercetools_SetStagedOrderCustomLineItemCustomFieldOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderCustomLineItemCustomFieldOutput';
  customLineItemId?: Maybe<Scalars['String']['output']>;
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type Commercetools_SetStagedOrderCustomLineItemCustomTypeOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderCustomLineItemCustomTypeOutput';
  custom: Commercetools_CustomFieldsCommand;
  customLineItemId?: Maybe<Scalars['String']['output']>;
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderCustomLineItemShippingDetailsOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderCustomLineItemShippingDetailsOutput';
  customLineItemId?: Maybe<Scalars['String']['output']>;
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  shippingDetails?: Maybe<Commercetools_ItemShippingDetailsDraftOutput>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderCustomLineItemTaxAmountOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderCustomLineItemTaxAmountOutput';
  customLineItemId?: Maybe<Scalars['String']['output']>;
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  externalTaxAmount?: Maybe<Commercetools_ExternalTaxAmountDraftOutput>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderCustomLineItemTaxRateOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderCustomLineItemTaxRateOutput';
  customLineItemId?: Maybe<Scalars['String']['output']>;
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  externalTaxRate?: Maybe<Commercetools_ExternalTaxRateDraftOutput>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderCustomShippingMethodOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderCustomShippingMethodOutput';
  externalTaxRate?: Maybe<Commercetools_ExternalTaxRateDraftOutput>;
  shippingMethodName: Scalars['String']['output'];
  shippingRate: Commercetools_ShippingRate;
  taxCategoryResId?: Maybe<Commercetools_ResourceIdentifier>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderCustomTypeOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderCustomTypeOutput';
  custom: Commercetools_CustomFieldsCommand;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderCustomerEmailOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderCustomerEmailOutput';
  email?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderCustomerGroupOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderCustomerGroupOutput';
  customerGroupResId?: Maybe<Commercetools_CustomerGroupReferenceIdentifier>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderCustomerIdOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderCustomerIdOutput';
  customerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderDeliveryAddressCustomFieldOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderDeliveryAddressCustomFieldOutput';
  deliveryId?: Maybe<Scalars['String']['output']>;
  deliveryKey?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type Commercetools_SetStagedOrderDeliveryAddressCustomTypeOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderDeliveryAddressCustomTypeOutput';
  custom: Commercetools_CustomFieldsCommand;
  deliveryId?: Maybe<Scalars['String']['output']>;
  deliveryKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderDeliveryAddressOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderDeliveryAddressOutput';
  address?: Maybe<Commercetools_AddressDraft>;
  deliveryId?: Maybe<Scalars['String']['output']>;
  deliveryKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderDeliveryCustomFieldOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderDeliveryCustomFieldOutput';
  deliveryId?: Maybe<Scalars['String']['output']>;
  deliveryKey?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type Commercetools_SetStagedOrderDeliveryCustomTypeOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderDeliveryCustomTypeOutput';
  custom: Commercetools_CustomFieldsCommand;
  deliveryId?: Maybe<Scalars['String']['output']>;
  deliveryKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderDeliveryItemsOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderDeliveryItemsOutput';
  deliveryId?: Maybe<Scalars['String']['output']>;
  deliveryKey?: Maybe<Scalars['String']['output']>;
  items: Array<Commercetools_DeliveryItem>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderDirectDiscountsOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderDirectDiscountsOutput';
  discounts: Array<Commercetools_DirectDiscountDraftOutput>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderItemShippingAddressCustomFieldOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderItemShippingAddressCustomFieldOutput';
  addressKey: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type Commercetools_SetStagedOrderItemShippingAddressCustomTypeOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderItemShippingAddressCustomTypeOutput';
  addressKey: Scalars['String']['output'];
  custom: Commercetools_CustomFieldsCommand;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderLineItemCustomFieldOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderLineItemCustomFieldOutput';
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type Commercetools_SetStagedOrderLineItemCustomTypeOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderLineItemCustomTypeOutput';
  custom: Commercetools_CustomFieldsCommand;
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderLineItemDistributionChannelOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderLineItemDistributionChannelOutput';
  distributionChannelResId?: Maybe<Commercetools_ChannelReferenceIdentifier>;
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderLineItemPriceOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderLineItemPriceOutput';
  externalPrice?: Maybe<Commercetools_BaseMoney>;
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderLineItemShippingDetailsOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderLineItemShippingDetailsOutput';
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  shippingDetails?: Maybe<Commercetools_ItemShippingDetailsDraftOutput>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderLineItemTaxAmountOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderLineItemTaxAmountOutput';
  externalTaxAmount?: Maybe<Commercetools_ExternalTaxAmountDraftOutput>;
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderLineItemTaxRateOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderLineItemTaxRateOutput';
  externalTaxRate?: Maybe<Commercetools_ExternalTaxRateDraftOutput>;
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderLineItemTotalPriceOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderLineItemTotalPriceOutput';
  externalTotalPrice?: Maybe<Commercetools_ExternalLineItemTotalPrice>;
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderLocaleOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderLocaleOutput';
  locale?: Maybe<Scalars['Commercetools_Locale']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderOrderNumberOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderOrderNumberOutput';
  orderNumber?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderOrderTotalTaxOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderOrderTotalTaxOutput';
  externalTaxPortions: Array<Commercetools_TaxPortion>;
  externalTotalGross?: Maybe<Commercetools_Money>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderParcelCustomFieldOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderParcelCustomFieldOutput';
  name: Scalars['String']['output'];
  parcelId?: Maybe<Scalars['String']['output']>;
  parcelKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type Commercetools_SetStagedOrderParcelCustomTypeOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderParcelCustomTypeOutput';
  custom: Commercetools_CustomFieldsCommand;
  parcelId?: Maybe<Scalars['String']['output']>;
  parcelKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderParcelItemsOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderParcelItemsOutput';
  items: Array<Commercetools_DeliveryItem>;
  parcelId?: Maybe<Scalars['String']['output']>;
  parcelKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderParcelMeasurementsOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderParcelMeasurementsOutput';
  measurements?: Maybe<Commercetools_ParcelMeasurements>;
  parcelId?: Maybe<Scalars['String']['output']>;
  parcelKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderParcelTrackingDataOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderParcelTrackingDataOutput';
  parcelId?: Maybe<Scalars['String']['output']>;
  parcelKey?: Maybe<Scalars['String']['output']>;
  trackingData?: Maybe<Commercetools_TrackingData>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderPurchaseOrderNumberOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderPurchaseOrderNumberOutput';
  purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderReturnInfoOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderReturnInfoOutput';
  items: Array<Commercetools_ReturnInfoDraftTypeOutput>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderReturnItemCustomFieldOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderReturnItemCustomFieldOutput';
  name: Scalars['String']['output'];
  returnItemId?: Maybe<Scalars['String']['output']>;
  returnItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type Commercetools_SetStagedOrderReturnItemCustomTypeOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderReturnItemCustomTypeOutput';
  custom: Commercetools_CustomFieldsCommand;
  returnItemId?: Maybe<Scalars['String']['output']>;
  returnItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderReturnPaymentStateOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderReturnPaymentStateOutput';
  paymentState: Commercetools_ReturnPaymentState;
  returnItemId?: Maybe<Scalars['String']['output']>;
  returnItemKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderReturnShipmentStateOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderReturnShipmentStateOutput';
  returnItemId?: Maybe<Scalars['String']['output']>;
  returnItemKey?: Maybe<Scalars['String']['output']>;
  shipmentState: Commercetools_ReturnShipmentState;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderShippingAddressAndCustomShippingMethodOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderShippingAddressAndCustomShippingMethodOutput';
  address: Commercetools_AddressDraft;
  externalTaxRate?: Maybe<Commercetools_ExternalTaxRateDraftOutput>;
  shippingMethodName: Scalars['String']['output'];
  shippingRate: Commercetools_ShippingRate;
  taxCategoryResId?: Maybe<Commercetools_ResourceIdentifier>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderShippingAddressAndShippingMethodOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderShippingAddressAndShippingMethodOutput';
  address: Commercetools_AddressDraft;
  externalTaxRate?: Maybe<Commercetools_ExternalTaxRateDraftOutput>;
  shippingMethodResId?: Maybe<Commercetools_ResourceIdentifier>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderShippingAddressCustomFieldOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderShippingAddressCustomFieldOutput';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type Commercetools_SetStagedOrderShippingAddressCustomTypeOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderShippingAddressCustomTypeOutput';
  custom: Commercetools_CustomFieldsCommand;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderShippingAddressOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderShippingAddressOutput';
  address?: Maybe<Commercetools_AddressDraft>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderShippingCustomFieldOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderShippingCustomFieldOutput';
  name: Scalars['String']['output'];
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Json']['output']>;
};

export type Commercetools_SetStagedOrderShippingCustomTypeOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderShippingCustomTypeOutput';
  custom: Commercetools_CustomFieldsCommand;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderShippingMethodOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderShippingMethodOutput';
  externalTaxRate?: Maybe<Commercetools_ExternalTaxRateDraftOutput>;
  shippingMethodResId?: Maybe<Commercetools_ResourceIdentifier>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderShippingMethodTaxAmountOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderShippingMethodTaxAmountOutput';
  externalTaxAmount?: Maybe<Commercetools_ExternalTaxAmountDraftOutput>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderShippingMethodTaxRateOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderShippingMethodTaxRateOutput';
  externalTaxRate?: Maybe<Commercetools_ExternalTaxRateDraftOutput>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderShippingRateInputOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderShippingRateInputOutput';
  shippingRateInput?: Maybe<Commercetools_ShippingRateInputDraftOutput>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetStagedOrderStoreOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_SetStagedOrderStoreOutput';
  storeResId?: Maybe<Commercetools_ResourceIdentifier>;
  type: Scalars['String']['output'];
};

export type Commercetools_SetType = Commercetools_FieldType & {
  __typename?: 'Commercetools_SetType';
  elementType: Commercetools_FieldType;
  name: Scalars['String']['output'];
};

export enum Commercetools_ShipmentState {
  Backorder = 'Backorder',
  Delayed = 'Delayed',
  Delivered = 'Delivered',
  Partial = 'Partial',
  Pending = 'Pending',
  Ready = 'Ready',
  Shipped = 'Shipped'
}

export type Commercetools_Shipping = {
  __typename?: 'Commercetools_Shipping';
  shippingAddress?: Maybe<Commercetools_Address>;
  shippingCustomFields?: Maybe<Commercetools_CustomFieldsType>;
  shippingInfo?: Maybe<Commercetools_ShippingInfo>;
  shippingKey?: Maybe<Scalars['String']['output']>;
  shippingRateInput?: Maybe<Commercetools_ShippingRateInput>;
};

export type Commercetools_ShippingInfo = {
  __typename?: 'Commercetools_ShippingInfo';
  deliveries: Array<Commercetools_Delivery>;
  discountedPrice?: Maybe<Commercetools_DiscountedLineItemPrice>;
  price: Commercetools_Money;
  shippingMethod?: Maybe<Commercetools_ShippingMethod>;
  shippingMethodName: Scalars['String']['output'];
  shippingMethodRef?: Maybe<Commercetools_Reference>;
  shippingMethodState: Commercetools_ShippingMethodState;
  shippingRate: Commercetools_ShippingRate;
  taxCategory?: Maybe<Commercetools_TaxCategory>;
  taxCategoryRef?: Maybe<Commercetools_Reference>;
  taxRate?: Maybe<Commercetools_TaxRate>;
  taxedPrice?: Maybe<Commercetools_TaxedItemPrice>;
};

export type Commercetools_ShippingMethod = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_ShippingMethod';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  id: Scalars['String']['output'];
  isDefault: Scalars['Boolean']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  localizedDescription?: Maybe<Scalars['String']['output']>;
  localizedDescriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  localizedName?: Maybe<Scalars['String']['output']>;
  localizedNameAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  name: Scalars['String']['output'];
  predicate?: Maybe<Scalars['String']['output']>;
  taxCategory?: Maybe<Commercetools_TaxCategory>;
  taxCategoryRef?: Maybe<Commercetools_Reference>;
  version: Scalars['Commercetools_Long']['output'];
  zoneRates: Array<Commercetools_ZoneRate>;
};


export type Commercetools_ShippingMethodLocalizedDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ShippingMethodLocalizedNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export enum Commercetools_ShippingMethodState {
  /** The ShippingMethod predicate does not match the cart. Ordering this cart will fail with error ShippingMethodDoesNotMatchCart */
  DoesNotMatchCart = 'DoesNotMatchCart',
  /** Either there is no predicate defined for the ShippingMethod or the given predicate matches the cart */
  MatchesCart = 'MatchesCart'
}

export type Commercetools_ShippingMethodTargetDraftOutput = {
  __typename?: 'Commercetools_ShippingMethodTargetDraftOutput';
  quantity: Scalars['Commercetools_Long']['output'];
  shippingMethodKey: Scalars['String']['output'];
};

export enum Commercetools_ShippingMode {
  /** Allows multiple shipping methods for the cart with their respective shipping addresses */
  Multiple = 'Multiple',
  /** Allows only one shipping method and shipping address for the cart */
  Single = 'Single'
}

/** Shipping Rate */
export type Commercetools_ShippingRate = {
  __typename?: 'Commercetools_ShippingRate';
  freeAbove?: Maybe<Commercetools_Money>;
  isMatching?: Maybe<Scalars['Boolean']['output']>;
  price: Commercetools_Money;
  tiers: Array<Commercetools_ShippingRatePriceTier>;
};

export type Commercetools_ShippingRateCartClassificationPriceTier = Commercetools_ShippingRatePriceTier & {
  __typename?: 'Commercetools_ShippingRateCartClassificationPriceTier';
  isMatching?: Maybe<Scalars['Boolean']['output']>;
  price: Commercetools_Money;
  type: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Commercetools_ShippingRateCartScorePriceTier = Commercetools_ShippingRatePriceTier & {
  __typename?: 'Commercetools_ShippingRateCartScorePriceTier';
  isMatching?: Maybe<Scalars['Boolean']['output']>;
  price?: Maybe<Commercetools_Money>;
  priceFunction?: Maybe<Commercetools_PriceFunction>;
  score: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_ShippingRateCartValuePriceTier = Commercetools_ShippingRatePriceTier & {
  __typename?: 'Commercetools_ShippingRateCartValuePriceTier';
  isMatching?: Maybe<Scalars['Boolean']['output']>;
  minimumCentAmount: Scalars['Int']['output'];
  price: Commercetools_Money;
  type: Scalars['String']['output'];
};

export type Commercetools_ShippingRateInput = {
  type: Scalars['String']['output'];
};

export type Commercetools_ShippingRateInputDraftOutput = {
  type: Scalars['String']['output'];
};

export type Commercetools_ShippingRatePriceTier = {
  type: Scalars['String']['output'];
};

export type Commercetools_ShippingTarget = Commercetools_CartDiscountTarget & {
  __typename?: 'Commercetools_ShippingTarget';
  type: Scalars['String']['output'];
};

export type Commercetools_ShoppingList = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_ShoppingList';
  anonymousId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  customer?: Maybe<Commercetools_Customer>;
  customerRef?: Maybe<Commercetools_Reference>;
  deleteDaysAfterLastModification?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  lineItems: Array<Commercetools_ShoppingListLineItem>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<Commercetools_LocalizedString>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  store?: Maybe<Commercetools_Store>;
  storeRef?: Maybe<Commercetools_KeyReference>;
  textLineItems: Array<Commercetools_TextLineItem>;
  version: Scalars['Commercetools_Long']['output'];
};


export type Commercetools_ShoppingListDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ShoppingListNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ShoppingListSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_ShoppingListLineItem = {
  __typename?: 'Commercetools_ShoppingListLineItem';
  addedAt: Scalars['DateTime']['output'];
  custom?: Maybe<Commercetools_CustomFieldsType>;
  deactivatedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<Commercetools_LocalizedString>;
  productId: Scalars['String']['output'];
  productSlug?: Maybe<Scalars['String']['output']>;
  productSlugAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  productType: Commercetools_ProductTypeDefinition;
  productTypeRef: Commercetools_Reference;
  quantity: Scalars['Int']['output'];
  variant?: Maybe<Commercetools_ProductVariant>;
  variantId?: Maybe<Scalars['Int']['output']>;
};


export type Commercetools_ShoppingListLineItemNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_ShoppingListLineItemProductSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

/** Describes how this discount interacts with other discounts */
export enum Commercetools_StackingMode {
  /** Default. Continue applying other matching discounts after applying this one. */
  Stacking = 'Stacking',
  /** Don’t apply any more matching discounts after this one. */
  StopAfterThisDiscount = 'StopAfterThisDiscount'
}

export type Commercetools_StagedOrderUpdateActionOutput = {
  type: Scalars['String']['output'];
};

export type Commercetools_StagedQuote = Commercetools_Versioned & {
  __typename?: 'Commercetools_StagedQuote';
  businessUnit?: Maybe<Commercetools_BusinessUnit>;
  businessUnitRef?: Maybe<Commercetools_KeyReference>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  customer?: Maybe<Commercetools_Customer>;
  customerRef?: Maybe<Commercetools_Reference>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  purchaseOrderNumber?: Maybe<Scalars['String']['output']>;
  quotationCart?: Maybe<Commercetools_Cart>;
  quotationCartRef: Commercetools_Reference;
  quoteRequest?: Maybe<Commercetools_QuoteRequest>;
  quoteRequestRef: Commercetools_Reference;
  sellerComment?: Maybe<Scalars['String']['output']>;
  stagedQuoteState: Commercetools_StagedQuoteState;
  state?: Maybe<Commercetools_State>;
  stateRef?: Maybe<Commercetools_Reference>;
  store?: Maybe<Commercetools_Store>;
  storeRef?: Maybe<Commercetools_KeyReference>;
  validTo?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_StagedQuoteCreated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StagedQuoteCreated';
  stagedQuote: Commercetools_StagedQuote;
  type: Scalars['String']['output'];
};

export type Commercetools_StagedQuoteDeleted = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StagedQuoteDeleted';
  type: Scalars['String']['output'];
};

export type Commercetools_StagedQuoteSellerCommentSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StagedQuoteSellerCommentSet';
  sellerComment?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export enum Commercetools_StagedQuoteState {
  Closed = 'Closed',
  InProgress = 'InProgress',
  Sent = 'Sent'
}

export type Commercetools_StagedQuoteStateChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StagedQuoteStateChanged';
  oldStagedQuoteState: Commercetools_StagedQuoteState;
  stagedQuoteState: Commercetools_StagedQuoteState;
  type: Scalars['String']['output'];
};

export type Commercetools_StagedQuoteStateTransition = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StagedQuoteStateTransition';
  force: Scalars['Boolean']['output'];
  oldState?: Maybe<Commercetools_State>;
  oldStateRef?: Maybe<Commercetools_Reference>;
  state?: Maybe<Commercetools_State>;
  stateRef: Commercetools_Reference;
  type: Scalars['String']['output'];
};

export type Commercetools_StagedQuoteValidToSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StagedQuoteValidToSet';
  type: Scalars['String']['output'];
  validTo?: Maybe<Scalars['DateTime']['output']>;
};

export type Commercetools_StagedStandalonePrice = {
  __typename?: 'Commercetools_StagedStandalonePrice';
  discounted?: Maybe<Commercetools_DiscountedProductPriceValue>;
  value: Commercetools_BaseMoney;
};

/**
 * StandalonePrices are managed and queried through the StandalonePrices API
 * and associated to a ProductVariant through the sku field.
 */
export type Commercetools_StandalonePrice = Commercetools_Versioned & {
  __typename?: 'Commercetools_StandalonePrice';
  active: Scalars['Boolean']['output'];
  channel?: Maybe<Commercetools_Channel>;
  channelRef?: Maybe<Commercetools_Reference>;
  country?: Maybe<Scalars['Commercetools_Country']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  customerGroup?: Maybe<Commercetools_CustomerGroup>;
  customerGroupRef?: Maybe<Commercetools_Reference>;
  discounted?: Maybe<Commercetools_DiscountedProductPriceValue>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  sku: Scalars['String']['output'];
  staged?: Maybe<Commercetools_StagedStandalonePrice>;
  tiers?: Maybe<Array<Commercetools_ProductPriceTier>>;
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
  value: Commercetools_BaseMoney;
  version: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_StandalonePriceActiveChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StandalonePriceActiveChanged';
  active: Scalars['Boolean']['output'];
  oldActive: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export type Commercetools_StandalonePriceCreated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StandalonePriceCreated';
  standalonePrice: Commercetools_StandalonePrice;
  type: Scalars['String']['output'];
};

export type Commercetools_StandalonePriceDeleted = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StandalonePriceDeleted';
  sku?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_StandalonePriceDiscountSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StandalonePriceDiscountSet';
  discounted?: Maybe<Commercetools_DiscountedProductPriceValue>;
  type: Scalars['String']['output'];
};

export type Commercetools_StandalonePriceExpiresAtSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StandalonePriceExpiresAtSet';
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_StandalonePriceExternalDiscountSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StandalonePriceExternalDiscountSet';
  discounted?: Maybe<Commercetools_DiscountedProductPriceValue>;
  type: Scalars['String']['output'];
};

export type Commercetools_StandalonePriceKeySet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StandalonePriceKeySet';
  key?: Maybe<Scalars['String']['output']>;
  oldKey?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_StandalonePriceStagedChangesApplied = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StandalonePriceStagedChangesApplied';
  stagedChanges: Commercetools_StagedStandalonePrice;
  type: Scalars['String']['output'];
};

export type Commercetools_StandalonePriceStagedChangesRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StandalonePriceStagedChangesRemoved';
  stagedChanges?: Maybe<Commercetools_StagedStandalonePrice>;
  type: Scalars['String']['output'];
};

export type Commercetools_StandalonePriceTierAdded = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StandalonePriceTierAdded';
  tier: Commercetools_ProductPriceTier;
  type: Scalars['String']['output'];
};

export type Commercetools_StandalonePriceTierRemoved = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StandalonePriceTierRemoved';
  tier: Commercetools_ProductPriceTier;
  type: Scalars['String']['output'];
};

export type Commercetools_StandalonePriceTiersSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StandalonePriceTiersSet';
  previousTiers: Array<Commercetools_ProductPriceTier>;
  tiers: Array<Commercetools_ProductPriceTier>;
  type: Scalars['String']['output'];
};

export type Commercetools_StandalonePriceValidFromAndUntilSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StandalonePriceValidFromAndUntilSet';
  previousValidFrom?: Maybe<Scalars['DateTime']['output']>;
  previousValidUntil?: Maybe<Scalars['DateTime']['output']>;
  type: Scalars['String']['output'];
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
};

export type Commercetools_StandalonePriceValidFromSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StandalonePriceValidFromSet';
  previousValidFrom?: Maybe<Scalars['DateTime']['output']>;
  type: Scalars['String']['output'];
  validFrom?: Maybe<Scalars['DateTime']['output']>;
};

export type Commercetools_StandalonePriceValidUntilSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StandalonePriceValidUntilSet';
  previousValidUntil?: Maybe<Scalars['DateTime']['output']>;
  type: Scalars['String']['output'];
  validUntil?: Maybe<Scalars['DateTime']['output']>;
};

export type Commercetools_StandalonePriceValueChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StandalonePriceValueChanged';
  oldValue?: Maybe<Commercetools_BaseMoney>;
  staged: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  value: Commercetools_BaseMoney;
};

/** [State](https://docs.commercetools.com/api/projects/states) */
export type Commercetools_State = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_State';
  builtIn: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  id: Scalars['String']['output'];
  initial: Scalars['Boolean']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  roles: Array<Commercetools_StateRole>;
  transitions?: Maybe<Array<Commercetools_State>>;
  transitionsRef?: Maybe<Array<Commercetools_Reference>>;
  type: Commercetools_StateType;
  version: Scalars['Commercetools_Long']['output'];
};


/** [State](https://docs.commercetools.com/api/projects/states) */
export type Commercetools_StateDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


/** [State](https://docs.commercetools.com/api/projects/states) */
export type Commercetools_StateNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export enum Commercetools_StateRole {
  Return = 'Return',
  ReviewIncludedInStatistics = 'ReviewIncludedInStatistics'
}

export enum Commercetools_StateType {
  LineItemState = 'LineItemState',
  OrderState = 'OrderState',
  PaymentState = 'PaymentState',
  ProductState = 'ProductState',
  QuoteRequestState = 'QuoteRequestState',
  QuoteState = 'QuoteState',
  ReviewState = 'ReviewState',
  StagedQuoteState = 'StagedQuoteState'
}

/** Stores allow defining different contexts for a project. */
export type Commercetools_Store = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_Store';
  countries?: Maybe<Array<Commercetools_StoreCountry>>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  distributionChannels: Array<Commercetools_Channel>;
  distributionChannelsRef: Array<Commercetools_Reference>;
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  languages?: Maybe<Array<Scalars['Commercetools_Locale']['output']>>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  productSelections: Array<Commercetools_ProductSelectionSetting>;
  supplyChannels: Array<Commercetools_Channel>;
  supplyChannelsRef: Array<Commercetools_Reference>;
  version: Scalars['Commercetools_Long']['output'];
};


/** Stores allow defining different contexts for a project. */
export type Commercetools_StoreNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_StoreCountriesChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StoreCountriesChanged';
  addedCountries?: Maybe<Array<Commercetools_StoreCountry>>;
  removedCountries?: Maybe<Array<Commercetools_StoreCountry>>;
  type: Scalars['String']['output'];
};

export type Commercetools_StoreCountry = {
  __typename?: 'Commercetools_StoreCountry';
  code: Scalars['Commercetools_Country']['output'];
};

export type Commercetools_StoreCreated = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StoreCreated';
  countries?: Maybe<Array<Commercetools_StoreCountry>>;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  distributionChannels: Array<Commercetools_Channel>;
  distributionChannelsRef: Array<Commercetools_Reference>;
  languages: Array<Scalars['Commercetools_Locale']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  productSelections: Array<Commercetools_ProductSelectionSetting>;
  productSelectionsRef: Array<Commercetools_Reference>;
  supplyChannels: Array<Commercetools_Channel>;
  supplyChannelsRef: Array<Commercetools_Reference>;
  type: Scalars['String']['output'];
};


export type Commercetools_StoreCreatedNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_StoreDeleted = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StoreDeleted';
  type: Scalars['String']['output'];
};

export type Commercetools_StoreDistributionChannelsChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StoreDistributionChannelsChanged';
  addedDistributionChannels?: Maybe<Array<Commercetools_Channel>>;
  addedDistributionChannelsRef?: Maybe<Array<Commercetools_Reference>>;
  removedDistributionChannels?: Maybe<Array<Commercetools_Channel>>;
  removedDistributionChannelsRef?: Maybe<Array<Commercetools_Reference>>;
  type: Scalars['String']['output'];
};

export type Commercetools_StoreLanguagesChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StoreLanguagesChanged';
  addedLanguages?: Maybe<Array<Scalars['Commercetools_Locale']['output']>>;
  removedLanguages?: Maybe<Array<Scalars['Commercetools_Locale']['output']>>;
  type: Scalars['String']['output'];
};

export type Commercetools_StoreNameSet = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StoreNameSet';
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  type: Scalars['String']['output'];
};


export type Commercetools_StoreNameSetNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_StoreProductSelectionsChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StoreProductSelectionsChanged';
  addedProductSelections?: Maybe<Array<Commercetools_ProductSelectionSetting>>;
  removedProductSelections?: Maybe<Array<Commercetools_ProductSelectionSetting>>;
  type: Scalars['String']['output'];
  updatedProductSelections?: Maybe<Array<Commercetools_ProductSelectionSetting>>;
};

export type Commercetools_StoreSupplyChannelsChanged = Commercetools_MessagePayload & {
  __typename?: 'Commercetools_StoreSupplyChannelsChanged';
  addedSupplyChannels?: Maybe<Array<Commercetools_Channel>>;
  addedSupplyChannelsRef?: Maybe<Array<Commercetools_Reference>>;
  removedSupplyChannels?: Maybe<Array<Commercetools_Channel>>;
  removedSupplyChannelsRef?: Maybe<Array<Commercetools_Reference>>;
  type: Scalars['String']['output'];
};

export type Commercetools_StringType = Commercetools_FieldType & {
  __typename?: 'Commercetools_StringType';
  name: Scalars['String']['output'];
};

export type Commercetools_SubRate = {
  __typename?: 'Commercetools_SubRate';
  amount: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export enum Commercetools_SubscriptionHealthStatus {
  ConfigurationError = 'ConfigurationError',
  ConfigurationErrorDeliveryStopped = 'ConfigurationErrorDeliveryStopped',
  Healthy = 'Healthy',
  ManuallySuspended = 'ManuallySuspended',
  TemporaryError = 'TemporaryError'
}

export type Commercetools_SuggestTokenizer = {
  type: Scalars['String']['output'];
};

/** Stores information about order synchronization activities (like export or import). */
export type Commercetools_SyncInfo = {
  __typename?: 'Commercetools_SyncInfo';
  channel?: Maybe<Commercetools_Channel>;
  channelRef: Commercetools_Reference;
  externalId?: Maybe<Scalars['String']['output']>;
  syncedAt: Scalars['DateTime']['output'];
};

export enum Commercetools_TaxCalculationMode {
  /**
   * Default. This calculation mode calculates the taxes after the unit price is multiplied with the quantity.
   * E.g. `($1.08 * 3 = $3.24) * 1.19 = $3.8556 -> $3.86 rounded`
   */
  LineItemLevel = 'LineItemLevel',
  /**
   * This calculation mode calculates the taxes on the unit price before multiplying with the quantity.
   * E.g. `($1.08 * 1.19 = $1.2852 -> $1.29 rounded) * 3 = $3.87`
   */
  UnitPriceLevel = 'UnitPriceLevel'
}

/** Tax Categories define how products are to be taxed in different countries. */
export type Commercetools_TaxCategory = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_TaxCategory';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  name: Scalars['String']['output'];
  rates: Array<Commercetools_TaxRate>;
  version: Scalars['Commercetools_Long']['output'];
};

export enum Commercetools_TaxMode {
  /** No taxes are added to the cart. */
  Disabled = 'Disabled',
  /**
   * The tax rates are set externally per ExternalTaxRateDraft. A cart with this tax mode can only be ordered if all
   * line items, all custom line items and the shipping method have an external tax rate set. The totalNet and
   * totalGross as well as the taxPortions fields are calculated according to the taxRoundingMode.
   */
  External = 'External',
  /**
   * The tax amounts and the tax rates as well as the tax portions are set externally per ExternalTaxAmountDraft.
   * A cart with this tax mode can only be ordered if the cart itself and all line items, all custom line items and
   * the shipping method have an external tax amount and rate set
   */
  ExternalAmount = 'ExternalAmount',
  /**
   * The tax rates are selected from the TaxCategories based on the cart shipping address.
   * The totalNet and totalGross as well as the taxPortions fields are calculated according to the
   * taxRoundingMode.
   */
  Platform = 'Platform'
}

/**
 * Represents the portions that sum up to the totalGross field of a TaxedPrice. The portions are calculated
 * from the TaxRates. If a tax rate has SubRates, they are used and can be identified by name. Tax portions
 * from line items that have the same rate and name will be accumulated to the same tax portion.
 */
export type Commercetools_TaxPortion = {
  __typename?: 'Commercetools_TaxPortion';
  amount: Commercetools_Money;
  name?: Maybe<Scalars['String']['output']>;
  rate: Scalars['Float']['output'];
};

export type Commercetools_TaxRate = {
  __typename?: 'Commercetools_TaxRate';
  amount: Scalars['Float']['output'];
  country: Scalars['Commercetools_Country']['output'];
  id?: Maybe<Scalars['String']['output']>;
  includedInPrice: Scalars['Boolean']['output'];
  key?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  state?: Maybe<Scalars['String']['output']>;
  subRates: Array<Commercetools_SubRate>;
};

export type Commercetools_TaxedItemPrice = {
  __typename?: 'Commercetools_TaxedItemPrice';
  taxPortions: Array<Commercetools_TaxPortion>;
  totalGross: Commercetools_Money;
  totalNet: Commercetools_Money;
  totalTax?: Maybe<Commercetools_Money>;
};

export type Commercetools_TaxedPrice = {
  __typename?: 'Commercetools_TaxedPrice';
  taxPortions: Array<Commercetools_TaxPortion>;
  totalGross: Commercetools_Money;
  totalNet: Commercetools_Money;
  totalTax?: Maybe<Commercetools_Money>;
};

export type Commercetools_TextAttributeDefinitionType = Commercetools_AttributeDefinitionType & {
  __typename?: 'Commercetools_TextAttributeDefinitionType';
  name: Scalars['String']['output'];
};

/** UI hint telling what kind of edit control should be displayed for a text attribute. */
export enum Commercetools_TextInputHint {
  MultiLine = 'MultiLine',
  SingleLine = 'SingleLine'
}

export type Commercetools_TextLineItem = {
  __typename?: 'Commercetools_TextLineItem';
  addedAt: Scalars['DateTime']['output'];
  custom?: Maybe<Commercetools_CustomFieldsType>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<Commercetools_LocalizedString>;
  quantity: Scalars['Int']['output'];
};


export type Commercetools_TextLineItemDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


export type Commercetools_TextLineItemNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_TimeAttributeDefinitionType = Commercetools_AttributeDefinitionType & {
  __typename?: 'Commercetools_TimeAttributeDefinitionType';
  name: Scalars['String']['output'];
};

export type Commercetools_TimeType = Commercetools_FieldType & {
  __typename?: 'Commercetools_TimeType';
  name: Scalars['String']['output'];
};

export type Commercetools_TrackingData = {
  __typename?: 'Commercetools_TrackingData';
  carrier?: Maybe<Scalars['String']['output']>;
  isReturn: Scalars['Boolean']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  providerTransaction?: Maybe<Scalars['String']['output']>;
  trackingId?: Maybe<Scalars['String']['output']>;
};

export type Commercetools_Transaction = {
  __typename?: 'Commercetools_Transaction';
  amount: Commercetools_Money;
  custom?: Maybe<Commercetools_CustomFieldsType>;
  id: Scalars['String']['output'];
  interactionId?: Maybe<Scalars['String']['output']>;
  state: Commercetools_TransactionState;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Commercetools_TransactionType>;
};

export enum Commercetools_TransactionState {
  Failure = 'Failure',
  Initial = 'Initial',
  Pending = 'Pending',
  Success = 'Success'
}

export enum Commercetools_TransactionType {
  Authorization = 'Authorization',
  CancelAuthorization = 'CancelAuthorization',
  Charge = 'Charge',
  Chargeback = 'Chargeback',
  Refund = 'Refund'
}

export type Commercetools_TransitionStagedOrderCustomLineItemStateOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_TransitionStagedOrderCustomLineItemStateOutput';
  actualTransitionDate?: Maybe<Scalars['DateTime']['output']>;
  customLineItemId?: Maybe<Scalars['String']['output']>;
  customLineItemKey?: Maybe<Scalars['String']['output']>;
  fromStateResId: Commercetools_ResourceIdentifier;
  quantity: Scalars['Commercetools_Long']['output'];
  toStateResId: Commercetools_ResourceIdentifier;
  type: Scalars['String']['output'];
};

export type Commercetools_TransitionStagedOrderLineItemStateOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_TransitionStagedOrderLineItemStateOutput';
  actualTransitionDate?: Maybe<Scalars['DateTime']['output']>;
  fromStateResId: Commercetools_ResourceIdentifier;
  lineItemId?: Maybe<Scalars['String']['output']>;
  lineItemKey?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Commercetools_Long']['output'];
  toStateResId: Commercetools_ResourceIdentifier;
  type: Scalars['String']['output'];
};

export type Commercetools_TransitionStagedOrderStateOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_TransitionStagedOrderStateOutput';
  force: Scalars['Boolean']['output'];
  stateResId: Commercetools_ResourceIdentifier;
  type: Scalars['String']['output'];
};

export type Commercetools_Trigger = {
  __typename?: 'Commercetools_Trigger';
  actions: Array<Commercetools_ActionType>;
  condition?: Maybe<Scalars['String']['output']>;
  resourceTypeId: Scalars['String']['output'];
};

/** Types allow you to define additional project-specific fields on resources and data types, so-called Custom Fields. */
export type Commercetools_TypeDefinition = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_TypeDefinition';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
  fieldDefinitions: Array<Commercetools_FieldDefinition>;
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  name?: Maybe<Scalars['String']['output']>;
  nameAllLocales: Array<Commercetools_LocalizedString>;
  resourceTypeIds: Array<Scalars['String']['output']>;
  version: Scalars['Commercetools_Long']['output'];
};


/** Types allow you to define additional project-specific fields on resources and data types, so-called Custom Fields. */
export type Commercetools_TypeDefinitionDescriptionArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};


/** Types allow you to define additional project-specific fields on resources and data types, so-called Custom Fields. */
export type Commercetools_TypeDefinitionFieldDefinitionsArgs = {
  excludeNames?: InputMaybe<Array<Scalars['String']['input']>>;
  includeNames?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Types allow you to define additional project-specific fields on resources and data types, so-called Custom Fields. */
export type Commercetools_TypeDefinitionNameArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

export type Commercetools_UpdateStagedOrderItemShippingAddressOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_UpdateStagedOrderItemShippingAddressOutput';
  address: Commercetools_AddressDraft;
  type: Scalars['String']['output'];
};

export type Commercetools_UpdateStagedOrderSyncInfoOutput = Commercetools_StagedOrderUpdateActionOutput & {
  __typename?: 'Commercetools_UpdateStagedOrderSyncInfoOutput';
  channelResId: Commercetools_ChannelReferenceIdentifier;
  externalId?: Maybe<Scalars['String']['output']>;
  syncedAt?: Maybe<Scalars['DateTime']['output']>;
  type: Scalars['String']['output'];
};

export type Commercetools_UserProvidedIdentifiers = {
  __typename?: 'Commercetools_UserProvidedIdentifiers';
  customerNumber?: Maybe<Scalars['String']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  orderNumber?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  slugAllLocales?: Maybe<Array<Commercetools_LocalizedString>>;
};


export type Commercetools_UserProvidedIdentifiersSlugArgs = {
  acceptLanguage?: InputMaybe<Array<Scalars['Commercetools_Locale']['input']>>;
  locale?: InputMaybe<Scalars['Commercetools_Locale']['input']>;
};

/** Versioned object have an ID and version and modification. Every update of this object changes it's version. */
export type Commercetools_Versioned = {
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  id: Scalars['String']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  version: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_WhitespaceSuggestTokenizer = Commercetools_SuggestTokenizer & {
  __typename?: 'Commercetools_WhitespaceSuggestTokenizer';
  type: Scalars['String']['output'];
};

/** Zones allow defining ShippingRates for specific Locations. */
export type Commercetools_Zone = Commercetools_ReferenceExpandable & Commercetools_Versioned & {
  __typename?: 'Commercetools_Zone';
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Commercetools_Initiator>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy?: Maybe<Commercetools_Initiator>;
  locations: Array<Commercetools_Location>;
  name: Scalars['String']['output'];
  version: Scalars['Commercetools_Long']['output'];
};

export type Commercetools_ZoneRate = {
  __typename?: 'Commercetools_ZoneRate';
  shippingRates: Array<Commercetools_ShippingRate>;
  zone?: Maybe<Commercetools_Zone>;
  zoneRef?: Maybe<Commercetools_Reference>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Cta = Entity & {
  __typename?: 'Cta';
  chapeau?: Maybe<Scalars['String']['output']>;
  cta?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Cta>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type CtaLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};

export type CtaConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CtaWhereUniqueInput;
};

/** A connection to a list of items. */
export type CtaConnection = {
  __typename?: 'CtaConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CtaEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CtaCreateInput = {
  /** chapeau input for default locale (en) */
  chapeau?: InputMaybe<Scalars['String']['input']>;
  /** cta input for default locale (en) */
  cta?: InputMaybe<Scalars['String']['input']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<CtaCreateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  /** url input for default locale (en) */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CtaCreateLocalizationDataInput = {
  chapeau?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CtaCreateLocalizationInput = {
  /** Localization input */
  data: CtaCreateLocalizationDataInput;
  locale: Locale;
};

export type CtaCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<CtaCreateLocalizationInput>>;
};

export type CtaCreateManyInlineInput = {
  /** Create and connect multiple existing Cta documents */
  create?: InputMaybe<Array<CtaCreateInput>>;
};

export type CtaCreateOneInlineInput = {
  /** Create and connect one Cta document */
  create?: InputMaybe<CtaCreateInput>;
};

export type CtaCreateWithPositionInput = {
  /** Document to create */
  data: CtaCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CtaEdge = {
  __typename?: 'CtaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Cta;
};

/** Identifies documents */
export type CtaManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CtaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CtaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CtaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum CtaOrderByInput {
  ChapeauAsc = 'chapeau_ASC',
  ChapeauDesc = 'chapeau_DESC',
  CtaAsc = 'cta_ASC',
  CtaDesc = 'cta_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type CtaParent = Editorial;

export type CtaParentConnectInput = {
  Editorial?: InputMaybe<EditorialConnectInput>;
};

export type CtaParentCreateInput = {
  Editorial?: InputMaybe<EditorialCreateInput>;
};

export type CtaParentCreateManyInlineInput = {
  /** Create and connect multiple existing CtaParent documents */
  create?: InputMaybe<Array<CtaParentCreateInput>>;
};

export type CtaParentCreateOneInlineInput = {
  /** Create and connect one CtaParent document */
  create?: InputMaybe<CtaParentCreateInput>;
};

export type CtaParentCreateWithPositionInput = {
  Editorial?: InputMaybe<EditorialCreateWithPositionInput>;
};

export type CtaParentUpdateInput = {
  Editorial?: InputMaybe<EditorialUpdateInput>;
};

export type CtaParentUpdateManyInlineInput = {
  /** Create and connect multiple CtaParent component instances */
  create?: InputMaybe<Array<CtaParentCreateWithPositionInput>>;
  /** Delete multiple CtaParent documents */
  delete?: InputMaybe<Array<CtaParentWhereUniqueInput>>;
  /** Update multiple CtaParent component instances */
  update?: InputMaybe<Array<CtaParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple CtaParent component instances */
  upsert?: InputMaybe<Array<CtaParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CtaParentUpdateManyWithNestedWhereInput = {
  Editorial?: InputMaybe<EditorialUpdateManyWithNestedWhereInput>;
};

export type CtaParentUpdateOneInlineInput = {
  /** Create and connect one CtaParent document */
  create?: InputMaybe<CtaParentCreateInput>;
  /** Delete currently connected CtaParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CtaParent document */
  update?: InputMaybe<CtaParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CtaParent document */
  upsert?: InputMaybe<CtaParentUpsertWithNestedWhereUniqueInput>;
};

export type CtaParentUpdateWithNestedWhereUniqueAndPositionInput = {
  Editorial?: InputMaybe<EditorialUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type CtaParentUpdateWithNestedWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialUpdateWithNestedWhereUniqueInput>;
};

export type CtaParentUpsertWithNestedWhereUniqueAndPositionInput = {
  Editorial?: InputMaybe<EditorialUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type CtaParentUpsertWithNestedWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialUpsertWithNestedWhereUniqueInput>;
};

export type CtaParentWhereInput = {
  Editorial?: InputMaybe<EditorialWhereInput>;
};

export type CtaParentWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialWhereUniqueInput>;
};

export type CtaUpdateInput = {
  /** chapeau input for default locale (en) */
  chapeau?: InputMaybe<Scalars['String']['input']>;
  /** cta input for default locale (en) */
  cta?: InputMaybe<Scalars['String']['input']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<CtaUpdateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  /** url input for default locale (en) */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CtaUpdateLocalizationDataInput = {
  chapeau?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CtaUpdateLocalizationInput = {
  data: CtaUpdateLocalizationDataInput;
  locale: Locale;
};

export type CtaUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<CtaCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<CtaUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<CtaUpsertLocalizationInput>>;
};

export type CtaUpdateManyInlineInput = {
  /** Create and connect multiple Cta component instances */
  create?: InputMaybe<Array<CtaCreateWithPositionInput>>;
  /** Delete multiple Cta documents */
  delete?: InputMaybe<Array<CtaWhereUniqueInput>>;
  /** Update multiple Cta component instances */
  update?: InputMaybe<Array<CtaUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Cta component instances */
  upsert?: InputMaybe<Array<CtaUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CtaUpdateManyInput = {
  /** chapeau input for default locale (en) */
  chapeau?: InputMaybe<Scalars['String']['input']>;
  /** cta input for default locale (en) */
  cta?: InputMaybe<Scalars['String']['input']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<CtaUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  /** url input for default locale (en) */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CtaUpdateManyLocalizationDataInput = {
  chapeau?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CtaUpdateManyLocalizationInput = {
  data: CtaUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type CtaUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<CtaUpdateManyLocalizationInput>>;
};

export type CtaUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CtaUpdateManyInput;
  /** Document search */
  where: CtaWhereInput;
};

export type CtaUpdateOneInlineInput = {
  /** Create and connect one Cta document */
  create?: InputMaybe<CtaCreateInput>;
  /** Delete currently connected Cta document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Cta document */
  update?: InputMaybe<CtaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Cta document */
  upsert?: InputMaybe<CtaUpsertWithNestedWhereUniqueInput>;
};

export type CtaUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<CtaUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CtaWhereUniqueInput;
};

export type CtaUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CtaUpdateInput;
  /** Unique document search */
  where: CtaWhereUniqueInput;
};

export type CtaUpsertInput = {
  /** Create document if it didn't exist */
  create: CtaCreateInput;
  /** Update document if it exists */
  update: CtaUpdateInput;
};

export type CtaUpsertLocalizationInput = {
  create: CtaCreateLocalizationDataInput;
  locale: Locale;
  update: CtaUpdateLocalizationDataInput;
};

export type CtaUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<CtaUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CtaWhereUniqueInput;
};

export type CtaUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CtaUpsertInput;
  /** Unique document search */
  where: CtaWhereUniqueInput;
};

/** Identifies documents */
export type CtaWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CtaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CtaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CtaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  chapeau?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  chapeau_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  chapeau_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  chapeau_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  chapeau_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  chapeau_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  chapeau_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  chapeau_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  chapeau_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  chapeau_starts_with?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  cta_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  cta_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  cta_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cta_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  cta_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  cta_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  cta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  cta_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  cta_starts_with?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Cta record uniquely */
export type CtaWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type Editorial = Entity & {
  __typename?: 'Editorial';
  components: Array<EditorialcomponentsUnion>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  /** System stage field */
  stage: Stage;
};


export type EditorialComponentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EditorialImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type EditorialConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: EditorialWhereUniqueInput;
};

/** A connection to a list of items. */
export type EditorialConnection = {
  __typename?: 'EditorialConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<EditorialEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type EditorialCreateInput = {
  components?: InputMaybe<EditorialcomponentsUnionCreateManyInlineInput>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
};

export type EditorialCreateManyInlineInput = {
  /** Create and connect multiple existing Editorial documents */
  create?: InputMaybe<Array<EditorialCreateInput>>;
};

export type EditorialCreateOneInlineInput = {
  /** Create and connect one Editorial document */
  create?: InputMaybe<EditorialCreateInput>;
};

export type EditorialCreateWithPositionInput = {
  /** Document to create */
  data: EditorialCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type EditorialEdge = {
  __typename?: 'EditorialEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Editorial;
};

/** Identifies documents */
export type EditorialManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EditorialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EditorialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EditorialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  components_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  components_some?: InputMaybe<EditorialcomponentsUnionWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
};

export enum EditorialOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type EditorialParent = Page;

export type EditorialParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type EditorialParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type EditorialParentCreateManyInlineInput = {
  /** Connect multiple existing EditorialParent documents */
  connect?: InputMaybe<Array<EditorialParentWhereUniqueInput>>;
  /** Create and connect multiple existing EditorialParent documents */
  create?: InputMaybe<Array<EditorialParentCreateInput>>;
};

export type EditorialParentCreateOneInlineInput = {
  /** Connect one existing EditorialParent document */
  connect?: InputMaybe<EditorialParentWhereUniqueInput>;
  /** Create and connect one EditorialParent document */
  create?: InputMaybe<EditorialParentCreateInput>;
};

export type EditorialParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type EditorialParentUpdateManyInlineInput = {
  /** Connect multiple existing EditorialParent documents */
  connect?: InputMaybe<Array<EditorialParentConnectInput>>;
  /** Create and connect multiple EditorialParent documents */
  create?: InputMaybe<Array<EditorialParentCreateInput>>;
  /** Delete multiple EditorialParent documents */
  delete?: InputMaybe<Array<EditorialParentWhereUniqueInput>>;
  /** Disconnect multiple EditorialParent documents */
  disconnect?: InputMaybe<Array<EditorialParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing EditorialParent documents */
  set?: InputMaybe<Array<EditorialParentWhereUniqueInput>>;
  /** Update multiple EditorialParent documents */
  update?: InputMaybe<Array<EditorialParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple EditorialParent documents */
  upsert?: InputMaybe<Array<EditorialParentUpsertWithNestedWhereUniqueInput>>;
};

export type EditorialParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type EditorialParentUpdateOneInlineInput = {
  /** Connect existing EditorialParent document */
  connect?: InputMaybe<EditorialParentWhereUniqueInput>;
  /** Create and connect one EditorialParent document */
  create?: InputMaybe<EditorialParentCreateInput>;
  /** Delete currently connected EditorialParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected EditorialParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single EditorialParent document */
  update?: InputMaybe<EditorialParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EditorialParent document */
  upsert?: InputMaybe<EditorialParentUpsertWithNestedWhereUniqueInput>;
};

export type EditorialParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type EditorialParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type EditorialParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type EditorialParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type EditorialUpdateInput = {
  components?: InputMaybe<EditorialcomponentsUnionUpdateManyInlineInput>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
};

export type EditorialUpdateManyInlineInput = {
  /** Create and connect multiple Editorial component instances */
  create?: InputMaybe<Array<EditorialCreateWithPositionInput>>;
  /** Delete multiple Editorial documents */
  delete?: InputMaybe<Array<EditorialWhereUniqueInput>>;
  /** Update multiple Editorial component instances */
  update?: InputMaybe<Array<EditorialUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Editorial component instances */
  upsert?: InputMaybe<Array<EditorialUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type EditorialUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type EditorialUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EditorialUpdateManyInput;
  /** Document search */
  where: EditorialWhereInput;
};

export type EditorialUpdateOneInlineInput = {
  /** Create and connect one Editorial document */
  create?: InputMaybe<EditorialCreateInput>;
  /** Delete currently connected Editorial document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Editorial document */
  update?: InputMaybe<EditorialUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Editorial document */
  upsert?: InputMaybe<EditorialUpsertWithNestedWhereUniqueInput>;
};

export type EditorialUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<EditorialUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: EditorialWhereUniqueInput;
};

export type EditorialUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EditorialUpdateInput;
  /** Unique document search */
  where: EditorialWhereUniqueInput;
};

export type EditorialUpsertInput = {
  /** Create document if it didn't exist */
  create: EditorialCreateInput;
  /** Update document if it exists */
  update: EditorialUpdateInput;
};

export type EditorialUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<EditorialUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: EditorialWhereUniqueInput;
};

export type EditorialUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EditorialUpsertInput;
  /** Unique document search */
  where: EditorialWhereUniqueInput;
};

/** Identifies documents */
export type EditorialWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EditorialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EditorialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EditorialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  components_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  components_some?: InputMaybe<EditorialcomponentsUnionWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
};

/** References Editorial record uniquely */
export type EditorialWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type EditorialcomponentsUnion = Card | Cta | ProductCard;

export type EditorialcomponentsUnionConnectInput = {
  Card?: InputMaybe<CardConnectInput>;
  Cta?: InputMaybe<CtaConnectInput>;
  ProductCard?: InputMaybe<ProductCardConnectInput>;
};

export type EditorialcomponentsUnionCreateInput = {
  Card?: InputMaybe<CardCreateInput>;
  Cta?: InputMaybe<CtaCreateInput>;
  ProductCard?: InputMaybe<ProductCardCreateInput>;
};

export type EditorialcomponentsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing EditorialcomponentsUnion documents */
  create?: InputMaybe<Array<EditorialcomponentsUnionCreateInput>>;
};

export type EditorialcomponentsUnionCreateOneInlineInput = {
  /** Create and connect one EditorialcomponentsUnion document */
  create?: InputMaybe<EditorialcomponentsUnionCreateInput>;
};

export type EditorialcomponentsUnionCreateWithPositionInput = {
  Card?: InputMaybe<CardCreateWithPositionInput>;
  Cta?: InputMaybe<CtaCreateWithPositionInput>;
  ProductCard?: InputMaybe<ProductCardCreateWithPositionInput>;
};

export type EditorialcomponentsUnionUpdateInput = {
  Card?: InputMaybe<CardUpdateInput>;
  Cta?: InputMaybe<CtaUpdateInput>;
  ProductCard?: InputMaybe<ProductCardUpdateInput>;
};

export type EditorialcomponentsUnionUpdateManyInlineInput = {
  /** Create and connect multiple EditorialcomponentsUnion component instances */
  create?: InputMaybe<Array<EditorialcomponentsUnionCreateWithPositionInput>>;
  /** Delete multiple EditorialcomponentsUnion documents */
  delete?: InputMaybe<Array<EditorialcomponentsUnionWhereUniqueInput>>;
  /** Update multiple EditorialcomponentsUnion component instances */
  update?: InputMaybe<Array<EditorialcomponentsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple EditorialcomponentsUnion component instances */
  upsert?: InputMaybe<Array<EditorialcomponentsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type EditorialcomponentsUnionUpdateManyWithNestedWhereInput = {
  Card?: InputMaybe<CardUpdateManyWithNestedWhereInput>;
  Cta?: InputMaybe<CtaUpdateManyWithNestedWhereInput>;
  ProductCard?: InputMaybe<ProductCardUpdateManyWithNestedWhereInput>;
};

export type EditorialcomponentsUnionUpdateOneInlineInput = {
  /** Create and connect one EditorialcomponentsUnion document */
  create?: InputMaybe<EditorialcomponentsUnionCreateInput>;
  /** Delete currently connected EditorialcomponentsUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single EditorialcomponentsUnion document */
  update?: InputMaybe<EditorialcomponentsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EditorialcomponentsUnion document */
  upsert?: InputMaybe<EditorialcomponentsUnionUpsertWithNestedWhereUniqueInput>;
};

export type EditorialcomponentsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Card?: InputMaybe<CardUpdateWithNestedWhereUniqueAndPositionInput>;
  Cta?: InputMaybe<CtaUpdateWithNestedWhereUniqueAndPositionInput>;
  ProductCard?: InputMaybe<ProductCardUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type EditorialcomponentsUnionUpdateWithNestedWhereUniqueInput = {
  Card?: InputMaybe<CardUpdateWithNestedWhereUniqueInput>;
  Cta?: InputMaybe<CtaUpdateWithNestedWhereUniqueInput>;
  ProductCard?: InputMaybe<ProductCardUpdateWithNestedWhereUniqueInput>;
};

export type EditorialcomponentsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Card?: InputMaybe<CardUpsertWithNestedWhereUniqueAndPositionInput>;
  Cta?: InputMaybe<CtaUpsertWithNestedWhereUniqueAndPositionInput>;
  ProductCard?: InputMaybe<ProductCardUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type EditorialcomponentsUnionUpsertWithNestedWhereUniqueInput = {
  Card?: InputMaybe<CardUpsertWithNestedWhereUniqueInput>;
  Cta?: InputMaybe<CtaUpsertWithNestedWhereUniqueInput>;
  ProductCard?: InputMaybe<ProductCardUpsertWithNestedWhereUniqueInput>;
};

export type EditorialcomponentsUnionWhereInput = {
  Card?: InputMaybe<CardWhereInput>;
  Cta?: InputMaybe<CtaWhereInput>;
  ProductCard?: InputMaybe<ProductCardWhereInput>;
};

export type EditorialcomponentsUnionWhereUniqueInput = {
  Card?: InputMaybe<CardWhereUniqueInput>;
  Cta?: InputMaybe<CtaWhereUniqueInput>;
  ProductCard?: InputMaybe<ProductCardWhereUniqueInput>;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  /** Asset system model */
  Asset = 'Asset',
  Card = 'Card',
  Cta = 'Cta',
  Editorial = 'Editorial',
  Hero = 'Hero',
  Navigation = 'Navigation',
  NewsletterSubscriber = 'NewsletterSubscriber',
  Page = 'Page',
  Pdp = 'Pdp',
  ProductCard = 'ProductCard',
  ProductFocus = 'ProductFocus',
  ProductHighlight = 'ProductHighlight',
  ProductList = 'ProductList',
  RelatedProductList = 'RelatedProductList',
  Routine = 'Routine',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  Tutorial = 'Tutorial',
  TutorialItem = 'TutorialItem',
  /** User system model */
  User = 'User'
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

export type FederateThisReviews_Review = {
  __typename?: 'FederateThisReviews_Review';
  comment?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Scalars['Int']['output']>;
  productSlug?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

export type FederateThisReviews_Reviews = {
  __typename?: 'FederateThisReviews_Reviews';
  data?: Maybe<Array<Maybe<FederateThisReviews_Review>>>;
};

export type FederateThisSkincre_Image = {
  __typename?: 'FederateThisSkincre_Image';
  alt?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type FederateThisSkincre_Product = {
  __typename?: 'FederateThisSkincre_Product';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  images?: Maybe<Array<Maybe<FederateThisSkincre_Image>>>;
  ingredients?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price?: Maybe<Scalars['Int']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  stock?: Maybe<Scalars['Int']['output']>;
};

export type FederateThisSkincre_Related = {
  __typename?: 'FederateThisSkincre_related';
  id: Scalars['Int']['output'];
  products?: Maybe<Array<FederateThisSkincre_Product>>;
};

export type Hero = Entity & {
  __typename?: 'Hero';
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Hero>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
};


export type HeroImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type HeroLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};

export type HeroConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HeroWhereUniqueInput;
};

/** A connection to a list of items. */
export type HeroConnection = {
  __typename?: 'HeroConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HeroEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HeroCreateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<HeroCreateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HeroCreateLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HeroCreateLocalizationInput = {
  /** Localization input */
  data: HeroCreateLocalizationDataInput;
  locale: Locale;
};

export type HeroCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<HeroCreateLocalizationInput>>;
};

export type HeroCreateManyInlineInput = {
  /** Create and connect multiple existing Hero documents */
  create?: InputMaybe<Array<HeroCreateInput>>;
};

export type HeroCreateOneInlineInput = {
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
};

export type HeroCreateWithPositionInput = {
  /** Document to create */
  data: HeroCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type HeroEdge = {
  __typename?: 'HeroEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Hero;
};

/** Identifies documents */
export type HeroManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
};

export enum HeroOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type HeroParent = Page;

export type HeroParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type HeroParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type HeroParentCreateManyInlineInput = {
  /** Connect multiple existing HeroParent documents */
  connect?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Create and connect multiple existing HeroParent documents */
  create?: InputMaybe<Array<HeroParentCreateInput>>;
};

export type HeroParentCreateOneInlineInput = {
  /** Connect one existing HeroParent document */
  connect?: InputMaybe<HeroParentWhereUniqueInput>;
  /** Create and connect one HeroParent document */
  create?: InputMaybe<HeroParentCreateInput>;
};

export type HeroParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type HeroParentUpdateManyInlineInput = {
  /** Connect multiple existing HeroParent documents */
  connect?: InputMaybe<Array<HeroParentConnectInput>>;
  /** Create and connect multiple HeroParent documents */
  create?: InputMaybe<Array<HeroParentCreateInput>>;
  /** Delete multiple HeroParent documents */
  delete?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Disconnect multiple HeroParent documents */
  disconnect?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing HeroParent documents */
  set?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Update multiple HeroParent documents */
  update?: InputMaybe<Array<HeroParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple HeroParent documents */
  upsert?: InputMaybe<Array<HeroParentUpsertWithNestedWhereUniqueInput>>;
};

export type HeroParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type HeroParentUpdateOneInlineInput = {
  /** Connect existing HeroParent document */
  connect?: InputMaybe<HeroParentWhereUniqueInput>;
  /** Create and connect one HeroParent document */
  create?: InputMaybe<HeroParentCreateInput>;
  /** Delete currently connected HeroParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected HeroParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single HeroParent document */
  update?: InputMaybe<HeroParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HeroParent document */
  upsert?: InputMaybe<HeroParentUpsertWithNestedWhereUniqueInput>;
};

export type HeroParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type HeroParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type HeroParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type HeroParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type HeroUpdateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<HeroUpdateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HeroUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HeroUpdateLocalizationInput = {
  data: HeroUpdateLocalizationDataInput;
  locale: Locale;
};

export type HeroUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<HeroCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<HeroUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<HeroUpsertLocalizationInput>>;
};

export type HeroUpdateManyInlineInput = {
  /** Create and connect multiple Hero component instances */
  create?: InputMaybe<Array<HeroCreateWithPositionInput>>;
  /** Delete multiple Hero documents */
  delete?: InputMaybe<Array<HeroWhereUniqueInput>>;
  /** Update multiple Hero component instances */
  update?: InputMaybe<Array<HeroUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Hero component instances */
  upsert?: InputMaybe<Array<HeroUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HeroUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<HeroUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HeroUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HeroUpdateManyLocalizationInput = {
  data: HeroUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type HeroUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<HeroUpdateManyLocalizationInput>>;
};

export type HeroUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HeroUpdateManyInput;
  /** Document search */
  where: HeroWhereInput;
};

export type HeroUpdateOneInlineInput = {
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
  /** Delete currently connected Hero document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Hero document */
  update?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Hero document */
  upsert?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
};

export type HeroUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<HeroUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroWhereUniqueInput;
};

export type HeroUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HeroUpdateInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
};

export type HeroUpsertInput = {
  /** Create document if it didn't exist */
  create: HeroCreateInput;
  /** Update document if it exists */
  update: HeroUpdateInput;
};

export type HeroUpsertLocalizationInput = {
  create: HeroCreateLocalizationDataInput;
  locale: Locale;
  update: HeroUpdateLocalizationDataInput;
};

export type HeroUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<HeroUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroWhereUniqueInput;
};

export type HeroUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HeroUpsertInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
};

/** Identifies documents */
export type HeroWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Hero record uniquely */
export type HeroWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
  Fr = 'fr'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one navigation */
  createNavigation?: Maybe<Navigation>;
  /** Create one newsletterSubscriber */
  createNewsletterSubscriber?: Maybe<NewsletterSubscriber>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Create one pdp */
  createPdp?: Maybe<Pdp>;
  /** Create one productFocus */
  createProductFocus?: Maybe<ProductFocus>;
  /** Create one relatedProductList */
  createRelatedProductList?: Maybe<RelatedProductList>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Navigation documents
   * @deprecated Please use the new paginated many mutation (deleteManyNavigationsConnection)
   */
  deleteManyNavigations: BatchPayload;
  /** Delete many Navigation documents, return deleted documents */
  deleteManyNavigationsConnection: NavigationConnection;
  /**
   * Delete many NewsletterSubscriber documents
   * @deprecated Please use the new paginated many mutation (deleteManyNewsletterSubscribersConnection)
   */
  deleteManyNewsletterSubscribers: BatchPayload;
  /** Delete many NewsletterSubscriber documents, return deleted documents */
  deleteManyNewsletterSubscribersConnection: NewsletterSubscriberConnection;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /**
   * Delete many Pdp documents
   * @deprecated Please use the new paginated many mutation (deleteManyPdpsConnection)
   */
  deleteManyPdps: BatchPayload;
  /** Delete many Pdp documents, return deleted documents */
  deleteManyPdpsConnection: PdpConnection;
  /**
   * Delete many ProductFocus documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductFociConnection)
   */
  deleteManyProductFoci: BatchPayload;
  /** Delete many ProductFocus documents, return deleted documents */
  deleteManyProductFociConnection: ProductFocusConnection;
  /**
   * Delete many RelatedProductList documents
   * @deprecated Please use the new paginated many mutation (deleteManyRelatedProductListsConnection)
   */
  deleteManyRelatedProductLists: BatchPayload;
  /** Delete many RelatedProductList documents, return deleted documents */
  deleteManyRelatedProductListsConnection: RelatedProductListConnection;
  /** Delete one navigation from _all_ existing stages. Returns deleted document. */
  deleteNavigation?: Maybe<Navigation>;
  /** Delete one newsletterSubscriber from _all_ existing stages. Returns deleted document. */
  deleteNewsletterSubscriber?: Maybe<NewsletterSubscriber>;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Delete one pdp from _all_ existing stages. Returns deleted document. */
  deletePdp?: Maybe<Pdp>;
  /** Delete one productFocus from _all_ existing stages. Returns deleted document. */
  deleteProductFocus?: Maybe<ProductFocus>;
  /** Delete one relatedProductList from _all_ existing stages. Returns deleted document. */
  deleteRelatedProductList?: Maybe<RelatedProductList>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Navigation documents
   * @deprecated Please use the new paginated many mutation (publishManyNavigationsConnection)
   */
  publishManyNavigations: BatchPayload;
  /** Publish many Navigation documents */
  publishManyNavigationsConnection: NavigationConnection;
  /**
   * Publish many NewsletterSubscriber documents
   * @deprecated Please use the new paginated many mutation (publishManyNewsletterSubscribersConnection)
   */
  publishManyNewsletterSubscribers: BatchPayload;
  /** Publish many NewsletterSubscriber documents */
  publishManyNewsletterSubscribersConnection: NewsletterSubscriberConnection;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /**
   * Publish many Pdp documents
   * @deprecated Please use the new paginated many mutation (publishManyPdpsConnection)
   */
  publishManyPdps: BatchPayload;
  /** Publish many Pdp documents */
  publishManyPdpsConnection: PdpConnection;
  /**
   * Publish many ProductFocus documents
   * @deprecated Please use the new paginated many mutation (publishManyProductFociConnection)
   */
  publishManyProductFoci: BatchPayload;
  /** Publish many ProductFocus documents */
  publishManyProductFociConnection: ProductFocusConnection;
  /**
   * Publish many RelatedProductList documents
   * @deprecated Please use the new paginated many mutation (publishManyRelatedProductListsConnection)
   */
  publishManyRelatedProductLists: BatchPayload;
  /** Publish many RelatedProductList documents */
  publishManyRelatedProductListsConnection: RelatedProductListConnection;
  /** Publish one navigation */
  publishNavigation?: Maybe<Navigation>;
  /** Publish one newsletterSubscriber */
  publishNewsletterSubscriber?: Maybe<NewsletterSubscriber>;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Publish one pdp */
  publishPdp?: Maybe<Pdp>;
  /** Publish one productFocus */
  publishProductFocus?: Maybe<ProductFocus>;
  /** Publish one relatedProductList */
  publishRelatedProductList?: Maybe<RelatedProductList>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one navigation */
  schedulePublishNavigation?: Maybe<Navigation>;
  /** Schedule to publish one newsletterSubscriber */
  schedulePublishNewsletterSubscriber?: Maybe<NewsletterSubscriber>;
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>;
  /** Schedule to publish one pdp */
  schedulePublishPdp?: Maybe<Pdp>;
  /** Schedule to publish one productFocus */
  schedulePublishProductFocus?: Maybe<ProductFocus>;
  /** Schedule to publish one relatedProductList */
  schedulePublishRelatedProductList?: Maybe<RelatedProductList>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one navigation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNavigation?: Maybe<Navigation>;
  /** Unpublish one newsletterSubscriber from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNewsletterSubscriber?: Maybe<NewsletterSubscriber>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>;
  /** Unpublish one pdp from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPdp?: Maybe<Pdp>;
  /** Unpublish one productFocus from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProductFocus?: Maybe<ProductFocus>;
  /** Unpublish one relatedProductList from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishRelatedProductList?: Maybe<RelatedProductList>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Navigation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNavigationsConnection)
   */
  unpublishManyNavigations: BatchPayload;
  /** Find many Navigation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNavigationsConnection: NavigationConnection;
  /**
   * Unpublish many NewsletterSubscriber documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNewsletterSubscribersConnection)
   */
  unpublishManyNewsletterSubscribers: BatchPayload;
  /** Find many NewsletterSubscriber documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNewsletterSubscribersConnection: NewsletterSubscriberConnection;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Unpublish many Pdp documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPdpsConnection)
   */
  unpublishManyPdps: BatchPayload;
  /** Find many Pdp documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPdpsConnection: PdpConnection;
  /**
   * Unpublish many ProductFocus documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductFociConnection)
   */
  unpublishManyProductFoci: BatchPayload;
  /** Find many ProductFocus documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductFociConnection: ProductFocusConnection;
  /**
   * Unpublish many RelatedProductList documents
   * @deprecated Please use the new paginated many mutation (unpublishManyRelatedProductListsConnection)
   */
  unpublishManyRelatedProductLists: BatchPayload;
  /** Find many RelatedProductList documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyRelatedProductListsConnection: RelatedProductListConnection;
  /** Unpublish one navigation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNavigation?: Maybe<Navigation>;
  /** Unpublish one newsletterSubscriber from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNewsletterSubscriber?: Maybe<NewsletterSubscriber>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Unpublish one pdp from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPdp?: Maybe<Pdp>;
  /** Unpublish one productFocus from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProductFocus?: Maybe<ProductFocus>;
  /** Unpublish one relatedProductList from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishRelatedProductList?: Maybe<RelatedProductList>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many navigations
   * @deprecated Please use the new paginated many mutation (updateManyNavigationsConnection)
   */
  updateManyNavigations: BatchPayload;
  /** Update many Navigation documents */
  updateManyNavigationsConnection: NavigationConnection;
  /**
   * Update many newsletterSubscribers
   * @deprecated Please use the new paginated many mutation (updateManyNewsletterSubscribersConnection)
   */
  updateManyNewsletterSubscribers: BatchPayload;
  /** Update many NewsletterSubscriber documents */
  updateManyNewsletterSubscribersConnection: NewsletterSubscriberConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /**
   * Update many pdps
   * @deprecated Please use the new paginated many mutation (updateManyPdpsConnection)
   */
  updateManyPdps: BatchPayload;
  /** Update many Pdp documents */
  updateManyPdpsConnection: PdpConnection;
  /**
   * Update many productFoci
   * @deprecated Please use the new paginated many mutation (updateManyProductFociConnection)
   */
  updateManyProductFoci: BatchPayload;
  /** Update many ProductFocus documents */
  updateManyProductFociConnection: ProductFocusConnection;
  /**
   * Update many relatedProductLists
   * @deprecated Please use the new paginated many mutation (updateManyRelatedProductListsConnection)
   */
  updateManyRelatedProductLists: BatchPayload;
  /** Update many RelatedProductList documents */
  updateManyRelatedProductListsConnection: RelatedProductListConnection;
  /** Update one navigation */
  updateNavigation?: Maybe<Navigation>;
  /** Update one newsletterSubscriber */
  updateNewsletterSubscriber?: Maybe<NewsletterSubscriber>;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Update one pdp */
  updatePdp?: Maybe<Pdp>;
  /** Update one productFocus */
  updateProductFocus?: Maybe<ProductFocus>;
  /** Update one relatedProductList */
  updateRelatedProductList?: Maybe<RelatedProductList>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one navigation */
  upsertNavigation?: Maybe<Navigation>;
  /** Upsert one newsletterSubscriber */
  upsertNewsletterSubscriber?: Maybe<NewsletterSubscriber>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Upsert one pdp */
  upsertPdp?: Maybe<Pdp>;
  /** Upsert one productFocus */
  upsertProductFocus?: Maybe<ProductFocus>;
  /** Upsert one relatedProductList */
  upsertRelatedProductList?: Maybe<RelatedProductList>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateNavigationArgs = {
  data: NavigationCreateInput;
};


export type MutationCreateNewsletterSubscriberArgs = {
  data: NewsletterSubscriberCreateInput;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationCreatePdpArgs = {
  data: PdpCreateInput;
};


export type MutationCreateProductFocusArgs = {
  data: ProductFocusCreateInput;
};


export type MutationCreateRelatedProductListArgs = {
  data: RelatedProductListCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyNavigationsArgs = {
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationDeleteManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationDeleteManyNewsletterSubscribersArgs = {
  where?: InputMaybe<NewsletterSubscriberManyWhereInput>;
};


export type MutationDeleteManyNewsletterSubscribersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewsletterSubscriberManyWhereInput>;
};


export type MutationDeleteManyPagesArgs = {
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyPdpsArgs = {
  where?: InputMaybe<PdpManyWhereInput>;
};


export type MutationDeleteManyPdpsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PdpManyWhereInput>;
};


export type MutationDeleteManyProductFociArgs = {
  where?: InputMaybe<ProductFocusManyWhereInput>;
};


export type MutationDeleteManyProductFociConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFocusManyWhereInput>;
};


export type MutationDeleteManyRelatedProductListsArgs = {
  where?: InputMaybe<RelatedProductListManyWhereInput>;
};


export type MutationDeleteManyRelatedProductListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RelatedProductListManyWhereInput>;
};


export type MutationDeleteNavigationArgs = {
  where: NavigationWhereUniqueInput;
};


export type MutationDeleteNewsletterSubscriberArgs = {
  where: NewsletterSubscriberWhereUniqueInput;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationDeletePdpArgs = {
  where: PdpWhereUniqueInput;
};


export type MutationDeleteProductFocusArgs = {
  where: ProductFocusWhereUniqueInput;
};


export type MutationDeleteRelatedProductListArgs = {
  where: RelatedProductListWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyNavigationsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationPublishManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationPublishManyNewsletterSubscribersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<NewsletterSubscriberManyWhereInput>;
};


export type MutationPublishManyNewsletterSubscribersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<NewsletterSubscriberManyWhereInput>;
};


export type MutationPublishManyPagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyPdpsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PdpManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyPdpsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PdpManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyProductFociArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductFocusManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyProductFociConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductFocusManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyRelatedProductListsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<RelatedProductListManyWhereInput>;
};


export type MutationPublishManyRelatedProductListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<RelatedProductListManyWhereInput>;
};


export type MutationPublishNavigationArgs = {
  to?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationPublishNewsletterSubscriberArgs = {
  to?: Array<Stage>;
  where: NewsletterSubscriberWhereUniqueInput;
};


export type MutationPublishPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishPdpArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: PdpWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishProductFocusArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: ProductFocusWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishRelatedProductListArgs = {
  to?: Array<Stage>;
  where: RelatedProductListWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishNavigationArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationSchedulePublishNewsletterSubscriberArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: NewsletterSubscriberWhereUniqueInput;
};


export type MutationSchedulePublishPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishPdpArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PdpWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishProductFocusArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ProductFocusWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishRelatedProductListArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: RelatedProductListWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishNavigationArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: NavigationWhereUniqueInput;
};


export type MutationScheduleUnpublishNewsletterSubscriberArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: NewsletterSubscriberWhereUniqueInput;
};


export type MutationScheduleUnpublishPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: PageWhereUniqueInput;
};


export type MutationScheduleUnpublishPdpArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: PdpWhereUniqueInput;
};


export type MutationScheduleUnpublishProductFocusArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: ProductFocusWhereUniqueInput;
};


export type MutationScheduleUnpublishRelatedProductListArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: RelatedProductListWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyNavigationsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUnpublishManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUnpublishManyNewsletterSubscribersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<NewsletterSubscriberManyWhereInput>;
};


export type MutationUnpublishManyNewsletterSubscribersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<NewsletterSubscriberManyWhereInput>;
};


export type MutationUnpublishManyPagesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPdpsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PdpManyWhereInput>;
};


export type MutationUnpublishManyPdpsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PdpManyWhereInput>;
};


export type MutationUnpublishManyProductFociArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProductFocusManyWhereInput>;
};


export type MutationUnpublishManyProductFociConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProductFocusManyWhereInput>;
};


export type MutationUnpublishManyRelatedProductListsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<RelatedProductListManyWhereInput>;
};


export type MutationUnpublishManyRelatedProductListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<RelatedProductListManyWhereInput>;
};


export type MutationUnpublishNavigationArgs = {
  from?: Array<Stage>;
  where: NavigationWhereUniqueInput;
};


export type MutationUnpublishNewsletterSubscriberArgs = {
  from?: Array<Stage>;
  where: NewsletterSubscriberWhereUniqueInput;
};


export type MutationUnpublishPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: PageWhereUniqueInput;
};


export type MutationUnpublishPdpArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: PdpWhereUniqueInput;
};


export type MutationUnpublishProductFocusArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: ProductFocusWhereUniqueInput;
};


export type MutationUnpublishRelatedProductListArgs = {
  from?: Array<Stage>;
  where: RelatedProductListWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyNavigationsArgs = {
  data: NavigationUpdateManyInput;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUpdateManyNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: NavigationUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationManyWhereInput>;
};


export type MutationUpdateManyNewsletterSubscribersArgs = {
  data: NewsletterSubscriberUpdateManyInput;
  where?: InputMaybe<NewsletterSubscriberManyWhereInput>;
};


export type MutationUpdateManyNewsletterSubscribersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: NewsletterSubscriberUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewsletterSubscriberManyWhereInput>;
};


export type MutationUpdateManyPagesArgs = {
  data: PageUpdateManyInput;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyPdpsArgs = {
  data: PdpUpdateManyInput;
  where?: InputMaybe<PdpManyWhereInput>;
};


export type MutationUpdateManyPdpsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PdpUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PdpManyWhereInput>;
};


export type MutationUpdateManyProductFociArgs = {
  data: ProductFocusUpdateManyInput;
  where?: InputMaybe<ProductFocusManyWhereInput>;
};


export type MutationUpdateManyProductFociConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ProductFocusUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFocusManyWhereInput>;
};


export type MutationUpdateManyRelatedProductListsArgs = {
  data: RelatedProductListUpdateManyInput;
  where?: InputMaybe<RelatedProductListManyWhereInput>;
};


export type MutationUpdateManyRelatedProductListsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: RelatedProductListUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RelatedProductListManyWhereInput>;
};


export type MutationUpdateNavigationArgs = {
  data: NavigationUpdateInput;
  where: NavigationWhereUniqueInput;
};


export type MutationUpdateNewsletterSubscriberArgs = {
  data: NewsletterSubscriberUpdateInput;
  where: NewsletterSubscriberWhereUniqueInput;
};


export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUpdatePdpArgs = {
  data: PdpUpdateInput;
  where: PdpWhereUniqueInput;
};


export type MutationUpdateProductFocusArgs = {
  data: ProductFocusUpdateInput;
  where: ProductFocusWhereUniqueInput;
};


export type MutationUpdateRelatedProductListArgs = {
  data: RelatedProductListUpdateInput;
  where: RelatedProductListWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertNavigationArgs = {
  upsert: NavigationUpsertInput;
  where: NavigationWhereUniqueInput;
};


export type MutationUpsertNewsletterSubscriberArgs = {
  upsert: NewsletterSubscriberUpsertInput;
  where: NewsletterSubscriberWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  upsert: PageUpsertInput;
  where: PageWhereUniqueInput;
};


export type MutationUpsertPdpArgs = {
  upsert: PdpUpsertInput;
  where: PdpWhereUniqueInput;
};


export type MutationUpsertProductFocusArgs = {
  upsert: ProductFocusUpsertInput;
  where: ProductFocusWhereUniqueInput;
};


export type MutationUpsertRelatedProductListArgs = {
  upsert: RelatedProductListUpsertInput;
  where: RelatedProductListWhereUniqueInput;
};

export type Navigation = Entity & Node & {
  __typename?: 'Navigation';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Navigation>;
  /** List of Navigation versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  page: Array<NavigationPage>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type NavigationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NavigationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type NavigationHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type NavigationPageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NavigationScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type NavigationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type NavigationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NavigationWhereUniqueInput;
};

/** A connection to a list of items. */
export type NavigationConnection = {
  __typename?: 'NavigationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NavigationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NavigationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  page?: InputMaybe<NavigationPageCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NavigationCreateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Create and connect multiple existing Navigation documents */
  create?: InputMaybe<Array<NavigationCreateInput>>;
};

export type NavigationCreateOneInlineInput = {
  /** Connect one existing Navigation document */
  connect?: InputMaybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create?: InputMaybe<NavigationCreateInput>;
};

/** An edge in a connection. */
export type NavigationEdge = {
  __typename?: 'NavigationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Navigation;
};

/** Identifies documents */
export type NavigationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_none?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_some?: InputMaybe<NavigationWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty */
  page_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  page_some?: InputMaybe<NavigationPageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum NavigationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NavigationPage = Page | Pdp;

export type NavigationPageConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
  Pdp?: InputMaybe<PdpConnectInput>;
};

export type NavigationPageCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
  Pdp?: InputMaybe<PdpCreateInput>;
};

export type NavigationPageCreateManyInlineInput = {
  /** Connect multiple existing NavigationPage documents */
  connect?: InputMaybe<Array<NavigationPageWhereUniqueInput>>;
  /** Create and connect multiple existing NavigationPage documents */
  create?: InputMaybe<Array<NavigationPageCreateInput>>;
};

export type NavigationPageCreateOneInlineInput = {
  /** Connect one existing NavigationPage document */
  connect?: InputMaybe<NavigationPageWhereUniqueInput>;
  /** Create and connect one NavigationPage document */
  create?: InputMaybe<NavigationPageCreateInput>;
};

export type NavigationPageUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
  Pdp?: InputMaybe<PdpUpdateInput>;
};

export type NavigationPageUpdateManyInlineInput = {
  /** Connect multiple existing NavigationPage documents */
  connect?: InputMaybe<Array<NavigationPageConnectInput>>;
  /** Create and connect multiple NavigationPage documents */
  create?: InputMaybe<Array<NavigationPageCreateInput>>;
  /** Delete multiple NavigationPage documents */
  delete?: InputMaybe<Array<NavigationPageWhereUniqueInput>>;
  /** Disconnect multiple NavigationPage documents */
  disconnect?: InputMaybe<Array<NavigationPageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing NavigationPage documents */
  set?: InputMaybe<Array<NavigationPageWhereUniqueInput>>;
  /** Update multiple NavigationPage documents */
  update?: InputMaybe<Array<NavigationPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NavigationPage documents */
  upsert?: InputMaybe<Array<NavigationPageUpsertWithNestedWhereUniqueInput>>;
};

export type NavigationPageUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
  Pdp?: InputMaybe<PdpUpdateManyWithNestedWhereInput>;
};

export type NavigationPageUpdateOneInlineInput = {
  /** Connect existing NavigationPage document */
  connect?: InputMaybe<NavigationPageWhereUniqueInput>;
  /** Create and connect one NavigationPage document */
  create?: InputMaybe<NavigationPageCreateInput>;
  /** Delete currently connected NavigationPage document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected NavigationPage document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single NavigationPage document */
  update?: InputMaybe<NavigationPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NavigationPage document */
  upsert?: InputMaybe<NavigationPageUpsertWithNestedWhereUniqueInput>;
};

export type NavigationPageUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  Pdp?: InputMaybe<PdpUpdateWithNestedWhereUniqueInput>;
};

export type NavigationPageUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
  Pdp?: InputMaybe<PdpUpsertWithNestedWhereUniqueInput>;
};

export type NavigationPageWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
  Pdp?: InputMaybe<PdpWhereInput>;
};

export type NavigationPageWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
  Pdp?: InputMaybe<PdpWhereUniqueInput>;
};

export type NavigationUpdateInput = {
  page?: InputMaybe<NavigationPageUpdateManyInlineInput>;
};

export type NavigationUpdateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect?: InputMaybe<Array<NavigationConnectInput>>;
  /** Create and connect multiple Navigation documents */
  create?: InputMaybe<Array<NavigationCreateInput>>;
  /** Delete multiple Navigation documents */
  delete?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Disconnect multiple Navigation documents */
  disconnect?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Navigation documents */
  set?: InputMaybe<Array<NavigationWhereUniqueInput>>;
  /** Update multiple Navigation documents */
  update?: InputMaybe<Array<NavigationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Navigation documents */
  upsert?: InputMaybe<Array<NavigationUpsertWithNestedWhereUniqueInput>>;
};

export type NavigationUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type NavigationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavigationUpdateManyInput;
  /** Document search */
  where: NavigationWhereInput;
};

export type NavigationUpdateOneInlineInput = {
  /** Connect existing Navigation document */
  connect?: InputMaybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create?: InputMaybe<NavigationCreateInput>;
  /** Delete currently connected Navigation document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Navigation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Navigation document */
  update?: InputMaybe<NavigationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Navigation document */
  upsert?: InputMaybe<NavigationUpsertWithNestedWhereUniqueInput>;
};

export type NavigationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavigationUpdateInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

export type NavigationUpsertInput = {
  /** Create document if it didn't exist */
  create: NavigationCreateInput;
  /** Update document if it exists */
  update: NavigationUpdateInput;
};

export type NavigationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavigationUpsertInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type NavigationWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type NavigationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_none?: InputMaybe<NavigationWhereStageInput>;
  documentInStages_some?: InputMaybe<NavigationWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values in which the union is empty */
  page_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  page_some?: InputMaybe<NavigationPageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type NavigationWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<NavigationWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Navigation record uniquely */
export type NavigationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type NewsletterSubscriber = Entity & Node & {
  __typename?: 'NewsletterSubscriber';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<NewsletterSubscriber>;
  email?: Maybe<Scalars['String']['output']>;
  /** List of NewsletterSubscriber versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type NewsletterSubscriberCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NewsletterSubscriberDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type NewsletterSubscriberHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type NewsletterSubscriberPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NewsletterSubscriberScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type NewsletterSubscriberUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type NewsletterSubscriberConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NewsletterSubscriberWhereUniqueInput;
};

/** A connection to a list of items. */
export type NewsletterSubscriberConnection = {
  __typename?: 'NewsletterSubscriberConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NewsletterSubscriberEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NewsletterSubscriberCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NewsletterSubscriberCreateManyInlineInput = {
  /** Connect multiple existing NewsletterSubscriber documents */
  connect?: InputMaybe<Array<NewsletterSubscriberWhereUniqueInput>>;
  /** Create and connect multiple existing NewsletterSubscriber documents */
  create?: InputMaybe<Array<NewsletterSubscriberCreateInput>>;
};

export type NewsletterSubscriberCreateOneInlineInput = {
  /** Connect one existing NewsletterSubscriber document */
  connect?: InputMaybe<NewsletterSubscriberWhereUniqueInput>;
  /** Create and connect one NewsletterSubscriber document */
  create?: InputMaybe<NewsletterSubscriberCreateInput>;
};

/** An edge in a connection. */
export type NewsletterSubscriberEdge = {
  __typename?: 'NewsletterSubscriberEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: NewsletterSubscriber;
};

/** Identifies documents */
export type NewsletterSubscriberManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NewsletterSubscriberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NewsletterSubscriberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NewsletterSubscriberWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NewsletterSubscriberWhereStageInput>;
  documentInStages_none?: InputMaybe<NewsletterSubscriberWhereStageInput>;
  documentInStages_some?: InputMaybe<NewsletterSubscriberWhereStageInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum NewsletterSubscriberOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NewsletterSubscriberUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type NewsletterSubscriberUpdateManyInlineInput = {
  /** Connect multiple existing NewsletterSubscriber documents */
  connect?: InputMaybe<Array<NewsletterSubscriberConnectInput>>;
  /** Create and connect multiple NewsletterSubscriber documents */
  create?: InputMaybe<Array<NewsletterSubscriberCreateInput>>;
  /** Delete multiple NewsletterSubscriber documents */
  delete?: InputMaybe<Array<NewsletterSubscriberWhereUniqueInput>>;
  /** Disconnect multiple NewsletterSubscriber documents */
  disconnect?: InputMaybe<Array<NewsletterSubscriberWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing NewsletterSubscriber documents */
  set?: InputMaybe<Array<NewsletterSubscriberWhereUniqueInput>>;
  /** Update multiple NewsletterSubscriber documents */
  update?: InputMaybe<Array<NewsletterSubscriberUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NewsletterSubscriber documents */
  upsert?: InputMaybe<Array<NewsletterSubscriberUpsertWithNestedWhereUniqueInput>>;
};

export type NewsletterSubscriberUpdateManyInput = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type NewsletterSubscriberUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NewsletterSubscriberUpdateManyInput;
  /** Document search */
  where: NewsletterSubscriberWhereInput;
};

export type NewsletterSubscriberUpdateOneInlineInput = {
  /** Connect existing NewsletterSubscriber document */
  connect?: InputMaybe<NewsletterSubscriberWhereUniqueInput>;
  /** Create and connect one NewsletterSubscriber document */
  create?: InputMaybe<NewsletterSubscriberCreateInput>;
  /** Delete currently connected NewsletterSubscriber document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected NewsletterSubscriber document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single NewsletterSubscriber document */
  update?: InputMaybe<NewsletterSubscriberUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NewsletterSubscriber document */
  upsert?: InputMaybe<NewsletterSubscriberUpsertWithNestedWhereUniqueInput>;
};

export type NewsletterSubscriberUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NewsletterSubscriberUpdateInput;
  /** Unique document search */
  where: NewsletterSubscriberWhereUniqueInput;
};

export type NewsletterSubscriberUpsertInput = {
  /** Create document if it didn't exist */
  create: NewsletterSubscriberCreateInput;
  /** Update document if it exists */
  update: NewsletterSubscriberUpdateInput;
};

export type NewsletterSubscriberUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NewsletterSubscriberUpsertInput;
  /** Unique document search */
  where: NewsletterSubscriberWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type NewsletterSubscriberWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type NewsletterSubscriberWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NewsletterSubscriberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NewsletterSubscriberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NewsletterSubscriberWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NewsletterSubscriberWhereStageInput>;
  documentInStages_none?: InputMaybe<NewsletterSubscriberWhereStageInput>;
  documentInStages_some?: InputMaybe<NewsletterSubscriberWhereStageInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type NewsletterSubscriberWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NewsletterSubscriberWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NewsletterSubscriberWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NewsletterSubscriberWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<NewsletterSubscriberWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References NewsletterSubscriber record uniquely */
export type NewsletterSubscriberWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

export type Page = Entity & Node & {
  __typename?: 'Page';
  components: Array<PagecomponentsUnion>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  /** List of Page versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Page>;
  navigation?: Maybe<Navigation>;
  ogImage?: Maybe<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PageComponentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PageHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type PageLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type PageNavigationArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageOgImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PagePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PageUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageCreateInput = {
  components?: InputMaybe<PagecomponentsUnionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PageCreateLocalizationsInput>;
  navigation?: InputMaybe<NavigationCreateOneInlineInput>;
  ogImage?: InputMaybe<AssetCreateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageCreateLocalizationInput = {
  /** Localization input */
  data: PageCreateLocalizationDataInput;
  locale: Locale;
};

export type PageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PageCreateLocalizationInput>>;
};

export type PageCreateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Create and connect multiple existing Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
};

export type PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  components_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  components_some?: InputMaybe<PagecomponentsUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  navigation?: InputMaybe<NavigationWhereInput>;
  ogImage?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PageUpdateInput = {
  components?: InputMaybe<PagecomponentsUnionUpdateManyInlineInput>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<PageUpdateLocalizationsInput>;
  navigation?: InputMaybe<NavigationUpdateOneInlineInput>;
  ogImage?: InputMaybe<AssetUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageUpdateLocalizationInput = {
  data: PageUpdateLocalizationDataInput;
  locale: Locale;
};

export type PageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PageCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PageUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PageUpsertLocalizationInput>>;
};

export type PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageConnectInput>>;
  /** Create and connect multiple Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
  /** Delete multiple Page documents */
  delete?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: InputMaybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: InputMaybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<PageUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PageUpdateManyLocalizationInput = {
  data: PageUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PageUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PageUpdateManyLocalizationInput>>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageUpdateManyInput;
  /** Document search */
  where: PageWhereInput;
};

export type PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
  /** Delete currently connected Page document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Page document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Page document */
  update?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageUpdateInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertLocalizationInput = {
  create: PageCreateLocalizationDataInput;
  locale: Locale;
  update: PageUpdateLocalizationDataInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageUpsertInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  components_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  components_some?: InputMaybe<PagecomponentsUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  navigation?: InputMaybe<NavigationWhereInput>;
  ogImage?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PagecomponentsUnion = Editorial | Hero | ProductHighlight | Routine;

export type PagecomponentsUnionConnectInput = {
  Editorial?: InputMaybe<EditorialConnectInput>;
  Hero?: InputMaybe<HeroConnectInput>;
  ProductHighlight?: InputMaybe<ProductHighlightConnectInput>;
  Routine?: InputMaybe<RoutineConnectInput>;
};

export type PagecomponentsUnionCreateInput = {
  Editorial?: InputMaybe<EditorialCreateInput>;
  Hero?: InputMaybe<HeroCreateInput>;
  ProductHighlight?: InputMaybe<ProductHighlightCreateInput>;
  Routine?: InputMaybe<RoutineCreateInput>;
};

export type PagecomponentsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing PagecomponentsUnion documents */
  create?: InputMaybe<Array<PagecomponentsUnionCreateInput>>;
};

export type PagecomponentsUnionCreateOneInlineInput = {
  /** Create and connect one PagecomponentsUnion document */
  create?: InputMaybe<PagecomponentsUnionCreateInput>;
};

export type PagecomponentsUnionCreateWithPositionInput = {
  Editorial?: InputMaybe<EditorialCreateWithPositionInput>;
  Hero?: InputMaybe<HeroCreateWithPositionInput>;
  ProductHighlight?: InputMaybe<ProductHighlightCreateWithPositionInput>;
  Routine?: InputMaybe<RoutineCreateWithPositionInput>;
};

export type PagecomponentsUnionUpdateInput = {
  Editorial?: InputMaybe<EditorialUpdateInput>;
  Hero?: InputMaybe<HeroUpdateInput>;
  ProductHighlight?: InputMaybe<ProductHighlightUpdateInput>;
  Routine?: InputMaybe<RoutineUpdateInput>;
};

export type PagecomponentsUnionUpdateManyInlineInput = {
  /** Create and connect multiple PagecomponentsUnion component instances */
  create?: InputMaybe<Array<PagecomponentsUnionCreateWithPositionInput>>;
  /** Delete multiple PagecomponentsUnion documents */
  delete?: InputMaybe<Array<PagecomponentsUnionWhereUniqueInput>>;
  /** Update multiple PagecomponentsUnion component instances */
  update?: InputMaybe<Array<PagecomponentsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PagecomponentsUnion component instances */
  upsert?: InputMaybe<Array<PagecomponentsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PagecomponentsUnionUpdateManyWithNestedWhereInput = {
  Editorial?: InputMaybe<EditorialUpdateManyWithNestedWhereInput>;
  Hero?: InputMaybe<HeroUpdateManyWithNestedWhereInput>;
  ProductHighlight?: InputMaybe<ProductHighlightUpdateManyWithNestedWhereInput>;
  Routine?: InputMaybe<RoutineUpdateManyWithNestedWhereInput>;
};

export type PagecomponentsUnionUpdateOneInlineInput = {
  /** Create and connect one PagecomponentsUnion document */
  create?: InputMaybe<PagecomponentsUnionCreateInput>;
  /** Delete currently connected PagecomponentsUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PagecomponentsUnion document */
  update?: InputMaybe<PagecomponentsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PagecomponentsUnion document */
  upsert?: InputMaybe<PagecomponentsUnionUpsertWithNestedWhereUniqueInput>;
};

export type PagecomponentsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Editorial?: InputMaybe<EditorialUpdateWithNestedWhereUniqueAndPositionInput>;
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueAndPositionInput>;
  ProductHighlight?: InputMaybe<ProductHighlightUpdateWithNestedWhereUniqueAndPositionInput>;
  Routine?: InputMaybe<RoutineUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type PagecomponentsUnionUpdateWithNestedWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialUpdateWithNestedWhereUniqueInput>;
  Hero?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
  ProductHighlight?: InputMaybe<ProductHighlightUpdateWithNestedWhereUniqueInput>;
  Routine?: InputMaybe<RoutineUpdateWithNestedWhereUniqueInput>;
};

export type PagecomponentsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Editorial?: InputMaybe<EditorialUpsertWithNestedWhereUniqueAndPositionInput>;
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueAndPositionInput>;
  ProductHighlight?: InputMaybe<ProductHighlightUpsertWithNestedWhereUniqueAndPositionInput>;
  Routine?: InputMaybe<RoutineUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type PagecomponentsUnionUpsertWithNestedWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialUpsertWithNestedWhereUniqueInput>;
  Hero?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
  ProductHighlight?: InputMaybe<ProductHighlightUpsertWithNestedWhereUniqueInput>;
  Routine?: InputMaybe<RoutineUpsertWithNestedWhereUniqueInput>;
};

export type PagecomponentsUnionWhereInput = {
  Editorial?: InputMaybe<EditorialWhereInput>;
  Hero?: InputMaybe<HeroWhereInput>;
  ProductHighlight?: InputMaybe<ProductHighlightWhereInput>;
  Routine?: InputMaybe<RoutineWhereInput>;
};

export type PagecomponentsUnionWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialWhereUniqueInput>;
  Hero?: InputMaybe<HeroWhereUniqueInput>;
  ProductHighlight?: InputMaybe<ProductHighlightWhereUniqueInput>;
  Routine?: InputMaybe<RoutineWhereUniqueInput>;
};

export type Pdp = Entity & Node & {
  __typename?: 'Pdp';
  commercetoolsProduct?: Maybe<Commercetools_Product>;
  commercetoolsProductId?: Maybe<Scalars['String']['output']>;
  components: Array<PdpcomponentsUnion>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<Pdp>;
  /** List of Pdp versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Pdp>;
  navigation?: Maybe<Navigation>;
  ogImage?: Maybe<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Federate This review selection */
  reviewId?: Maybe<Scalars['String']['output']>;
  reviews?: Maybe<FederateThisReviews_Reviews>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PdpComponentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PdpCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PdpCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PdpDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PdpHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type PdpLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type PdpNavigationArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PdpOgImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PdpPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PdpPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PdpScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PdpUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PdpUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PdpConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PdpWhereUniqueInput;
};

/** A connection to a list of items. */
export type PdpConnection = {
  __typename?: 'PdpConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PdpEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PdpCreateInput = {
  commercetoolsProductId?: InputMaybe<Scalars['String']['input']>;
  components?: InputMaybe<PdpcomponentsUnionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PdpCreateLocalizationsInput>;
  navigation?: InputMaybe<NavigationCreateOneInlineInput>;
  ogImage?: InputMaybe<AssetCreateOneInlineInput>;
  reviewId?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PdpCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PdpCreateLocalizationInput = {
  /** Localization input */
  data: PdpCreateLocalizationDataInput;
  locale: Locale;
};

export type PdpCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PdpCreateLocalizationInput>>;
};

export type PdpCreateManyInlineInput = {
  /** Connect multiple existing Pdp documents */
  connect?: InputMaybe<Array<PdpWhereUniqueInput>>;
  /** Create and connect multiple existing Pdp documents */
  create?: InputMaybe<Array<PdpCreateInput>>;
};

export type PdpCreateOneInlineInput = {
  /** Connect one existing Pdp document */
  connect?: InputMaybe<PdpWhereUniqueInput>;
  /** Create and connect one Pdp document */
  create?: InputMaybe<PdpCreateInput>;
};

/** An edge in a connection. */
export type PdpEdge = {
  __typename?: 'PdpEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Pdp;
};

/** Identifies documents */
export type PdpManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PdpWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PdpWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PdpWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  commercetoolsProductId?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  commercetoolsProductId_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  commercetoolsProductId_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  commercetoolsProductId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  commercetoolsProductId_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  commercetoolsProductId_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  commercetoolsProductId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  commercetoolsProductId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  commercetoolsProductId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  commercetoolsProductId_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  components_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  components_some?: InputMaybe<PdpcomponentsUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PdpWhereStageInput>;
  documentInStages_none?: InputMaybe<PdpWhereStageInput>;
  documentInStages_some?: InputMaybe<PdpWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  navigation?: InputMaybe<NavigationWhereInput>;
  ogImage?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  reviewId?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  reviewId_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  reviewId_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  reviewId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  reviewId_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  reviewId_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  reviewId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  reviewId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  reviewId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  reviewId_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PdpOrderByInput {
  CommercetoolsProductIdAsc = 'commercetoolsProductId_ASC',
  CommercetoolsProductIdDesc = 'commercetoolsProductId_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReviewIdAsc = 'reviewId_ASC',
  ReviewIdDesc = 'reviewId_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PdpUpdateInput = {
  commercetoolsProductId?: InputMaybe<Scalars['String']['input']>;
  components?: InputMaybe<PdpcomponentsUnionUpdateManyInlineInput>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<PdpUpdateLocalizationsInput>;
  navigation?: InputMaybe<NavigationUpdateOneInlineInput>;
  ogImage?: InputMaybe<AssetUpdateOneInlineInput>;
  reviewId?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PdpUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PdpUpdateLocalizationInput = {
  data: PdpUpdateLocalizationDataInput;
  locale: Locale;
};

export type PdpUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PdpCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PdpUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PdpUpsertLocalizationInput>>;
};

export type PdpUpdateManyInlineInput = {
  /** Connect multiple existing Pdp documents */
  connect?: InputMaybe<Array<PdpConnectInput>>;
  /** Create and connect multiple Pdp documents */
  create?: InputMaybe<Array<PdpCreateInput>>;
  /** Delete multiple Pdp documents */
  delete?: InputMaybe<Array<PdpWhereUniqueInput>>;
  /** Disconnect multiple Pdp documents */
  disconnect?: InputMaybe<Array<PdpWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Pdp documents */
  set?: InputMaybe<Array<PdpWhereUniqueInput>>;
  /** Update multiple Pdp documents */
  update?: InputMaybe<Array<PdpUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Pdp documents */
  upsert?: InputMaybe<Array<PdpUpsertWithNestedWhereUniqueInput>>;
};

export type PdpUpdateManyInput = {
  commercetoolsProductId?: InputMaybe<Scalars['String']['input']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<PdpUpdateManyLocalizationsInput>;
  reviewId?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PdpUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PdpUpdateManyLocalizationInput = {
  data: PdpUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PdpUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PdpUpdateManyLocalizationInput>>;
};

export type PdpUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PdpUpdateManyInput;
  /** Document search */
  where: PdpWhereInput;
};

export type PdpUpdateOneInlineInput = {
  /** Connect existing Pdp document */
  connect?: InputMaybe<PdpWhereUniqueInput>;
  /** Create and connect one Pdp document */
  create?: InputMaybe<PdpCreateInput>;
  /** Delete currently connected Pdp document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Pdp document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Pdp document */
  update?: InputMaybe<PdpUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Pdp document */
  upsert?: InputMaybe<PdpUpsertWithNestedWhereUniqueInput>;
};

export type PdpUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PdpUpdateInput;
  /** Unique document search */
  where: PdpWhereUniqueInput;
};

export type PdpUpsertInput = {
  /** Create document if it didn't exist */
  create: PdpCreateInput;
  /** Update document if it exists */
  update: PdpUpdateInput;
};

export type PdpUpsertLocalizationInput = {
  create: PdpCreateLocalizationDataInput;
  locale: Locale;
  update: PdpUpdateLocalizationDataInput;
};

export type PdpUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PdpUpsertInput;
  /** Unique document search */
  where: PdpWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PdpWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PdpWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PdpWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PdpWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PdpWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  commercetoolsProductId?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  commercetoolsProductId_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  commercetoolsProductId_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  commercetoolsProductId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  commercetoolsProductId_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  commercetoolsProductId_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  commercetoolsProductId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  commercetoolsProductId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  commercetoolsProductId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  commercetoolsProductId_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the union is empty. */
  components_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  components_some?: InputMaybe<PdpcomponentsUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<PdpWhereStageInput>;
  documentInStages_none?: InputMaybe<PdpWhereStageInput>;
  documentInStages_some?: InputMaybe<PdpWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  navigation?: InputMaybe<NavigationWhereInput>;
  ogImage?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  reviewId?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  reviewId_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  reviewId_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  reviewId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  reviewId_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  reviewId_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  reviewId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  reviewId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  reviewId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  reviewId_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PdpWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PdpWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PdpWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PdpWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PdpWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Pdp record uniquely */
export type PdpWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PdpcomponentsUnion = ProductList | Routine | Tutorial;

export type PdpcomponentsUnionConnectInput = {
  ProductList?: InputMaybe<ProductListConnectInput>;
  Routine?: InputMaybe<RoutineConnectInput>;
  Tutorial?: InputMaybe<TutorialConnectInput>;
};

export type PdpcomponentsUnionCreateInput = {
  ProductList?: InputMaybe<ProductListCreateInput>;
  Routine?: InputMaybe<RoutineCreateInput>;
  Tutorial?: InputMaybe<TutorialCreateInput>;
};

export type PdpcomponentsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing PdpcomponentsUnion documents */
  create?: InputMaybe<Array<PdpcomponentsUnionCreateInput>>;
};

export type PdpcomponentsUnionCreateOneInlineInput = {
  /** Create and connect one PdpcomponentsUnion document */
  create?: InputMaybe<PdpcomponentsUnionCreateInput>;
};

export type PdpcomponentsUnionCreateWithPositionInput = {
  ProductList?: InputMaybe<ProductListCreateWithPositionInput>;
  Routine?: InputMaybe<RoutineCreateWithPositionInput>;
  Tutorial?: InputMaybe<TutorialCreateWithPositionInput>;
};

export type PdpcomponentsUnionUpdateInput = {
  ProductList?: InputMaybe<ProductListUpdateInput>;
  Routine?: InputMaybe<RoutineUpdateInput>;
  Tutorial?: InputMaybe<TutorialUpdateInput>;
};

export type PdpcomponentsUnionUpdateManyInlineInput = {
  /** Create and connect multiple PdpcomponentsUnion component instances */
  create?: InputMaybe<Array<PdpcomponentsUnionCreateWithPositionInput>>;
  /** Delete multiple PdpcomponentsUnion documents */
  delete?: InputMaybe<Array<PdpcomponentsUnionWhereUniqueInput>>;
  /** Update multiple PdpcomponentsUnion component instances */
  update?: InputMaybe<Array<PdpcomponentsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PdpcomponentsUnion component instances */
  upsert?: InputMaybe<Array<PdpcomponentsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PdpcomponentsUnionUpdateManyWithNestedWhereInput = {
  ProductList?: InputMaybe<ProductListUpdateManyWithNestedWhereInput>;
  Routine?: InputMaybe<RoutineUpdateManyWithNestedWhereInput>;
  Tutorial?: InputMaybe<TutorialUpdateManyWithNestedWhereInput>;
};

export type PdpcomponentsUnionUpdateOneInlineInput = {
  /** Create and connect one PdpcomponentsUnion document */
  create?: InputMaybe<PdpcomponentsUnionCreateInput>;
  /** Delete currently connected PdpcomponentsUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PdpcomponentsUnion document */
  update?: InputMaybe<PdpcomponentsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PdpcomponentsUnion document */
  upsert?: InputMaybe<PdpcomponentsUnionUpsertWithNestedWhereUniqueInput>;
};

export type PdpcomponentsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  ProductList?: InputMaybe<ProductListUpdateWithNestedWhereUniqueAndPositionInput>;
  Routine?: InputMaybe<RoutineUpdateWithNestedWhereUniqueAndPositionInput>;
  Tutorial?: InputMaybe<TutorialUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type PdpcomponentsUnionUpdateWithNestedWhereUniqueInput = {
  ProductList?: InputMaybe<ProductListUpdateWithNestedWhereUniqueInput>;
  Routine?: InputMaybe<RoutineUpdateWithNestedWhereUniqueInput>;
  Tutorial?: InputMaybe<TutorialUpdateWithNestedWhereUniqueInput>;
};

export type PdpcomponentsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  ProductList?: InputMaybe<ProductListUpsertWithNestedWhereUniqueAndPositionInput>;
  Routine?: InputMaybe<RoutineUpsertWithNestedWhereUniqueAndPositionInput>;
  Tutorial?: InputMaybe<TutorialUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type PdpcomponentsUnionUpsertWithNestedWhereUniqueInput = {
  ProductList?: InputMaybe<ProductListUpsertWithNestedWhereUniqueInput>;
  Routine?: InputMaybe<RoutineUpsertWithNestedWhereUniqueInput>;
  Tutorial?: InputMaybe<TutorialUpsertWithNestedWhereUniqueInput>;
};

export type PdpcomponentsUnionWhereInput = {
  ProductList?: InputMaybe<ProductListWhereInput>;
  Routine?: InputMaybe<RoutineWhereInput>;
  Tutorial?: InputMaybe<TutorialWhereInput>;
};

export type PdpcomponentsUnionWhereUniqueInput = {
  ProductList?: InputMaybe<ProductListWhereUniqueInput>;
  Routine?: InputMaybe<RoutineWhereUniqueInput>;
  Tutorial?: InputMaybe<TutorialWhereUniqueInput>;
};

export type ProductCard = Entity & {
  __typename?: 'ProductCard';
  cta?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ProductCard>;
  product?: Maybe<Scalars['Json']['output']>;
  /** System stage field */
  stage: Stage;
};


export type ProductCardLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};

export type ProductCardConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductCardWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductCardConnection = {
  __typename?: 'ProductCardConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductCardEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductCardCreateInput = {
  /** cta input for default locale (en) */
  cta?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ProductCardCreateLocalizationsInput>;
  product?: InputMaybe<Scalars['Json']['input']>;
};

export type ProductCardCreateLocalizationDataInput = {
  cta?: InputMaybe<Scalars['String']['input']>;
};

export type ProductCardCreateLocalizationInput = {
  /** Localization input */
  data: ProductCardCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductCardCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ProductCardCreateLocalizationInput>>;
};

export type ProductCardCreateManyInlineInput = {
  /** Create and connect multiple existing ProductCard documents */
  create?: InputMaybe<Array<ProductCardCreateInput>>;
};

export type ProductCardCreateOneInlineInput = {
  /** Create and connect one ProductCard document */
  create?: InputMaybe<ProductCardCreateInput>;
};

export type ProductCardCreateWithPositionInput = {
  /** Document to create */
  data: ProductCardCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ProductCardEdge = {
  __typename?: 'ProductCardEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductCard;
};

/** Identifies documents */
export type ProductCardManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductCardWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductCardWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductCardWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given json path. */
  product_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  product_value_recursive?: InputMaybe<Scalars['Json']['input']>;
};

export enum ProductCardOrderByInput {
  CtaAsc = 'cta_ASC',
  CtaDesc = 'cta_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type ProductCardParent = Editorial;

export type ProductCardParentConnectInput = {
  Editorial?: InputMaybe<EditorialConnectInput>;
};

export type ProductCardParentCreateInput = {
  Editorial?: InputMaybe<EditorialCreateInput>;
};

export type ProductCardParentCreateManyInlineInput = {
  /** Create and connect multiple existing ProductCardParent documents */
  create?: InputMaybe<Array<ProductCardParentCreateInput>>;
};

export type ProductCardParentCreateOneInlineInput = {
  /** Create and connect one ProductCardParent document */
  create?: InputMaybe<ProductCardParentCreateInput>;
};

export type ProductCardParentCreateWithPositionInput = {
  Editorial?: InputMaybe<EditorialCreateWithPositionInput>;
};

export type ProductCardParentUpdateInput = {
  Editorial?: InputMaybe<EditorialUpdateInput>;
};

export type ProductCardParentUpdateManyInlineInput = {
  /** Create and connect multiple ProductCardParent component instances */
  create?: InputMaybe<Array<ProductCardParentCreateWithPositionInput>>;
  /** Delete multiple ProductCardParent documents */
  delete?: InputMaybe<Array<ProductCardParentWhereUniqueInput>>;
  /** Update multiple ProductCardParent component instances */
  update?: InputMaybe<Array<ProductCardParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ProductCardParent component instances */
  upsert?: InputMaybe<Array<ProductCardParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ProductCardParentUpdateManyWithNestedWhereInput = {
  Editorial?: InputMaybe<EditorialUpdateManyWithNestedWhereInput>;
};

export type ProductCardParentUpdateOneInlineInput = {
  /** Create and connect one ProductCardParent document */
  create?: InputMaybe<ProductCardParentCreateInput>;
  /** Delete currently connected ProductCardParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProductCardParent document */
  update?: InputMaybe<ProductCardParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductCardParent document */
  upsert?: InputMaybe<ProductCardParentUpsertWithNestedWhereUniqueInput>;
};

export type ProductCardParentUpdateWithNestedWhereUniqueAndPositionInput = {
  Editorial?: InputMaybe<EditorialUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ProductCardParentUpdateWithNestedWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialUpdateWithNestedWhereUniqueInput>;
};

export type ProductCardParentUpsertWithNestedWhereUniqueAndPositionInput = {
  Editorial?: InputMaybe<EditorialUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ProductCardParentUpsertWithNestedWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialUpsertWithNestedWhereUniqueInput>;
};

export type ProductCardParentWhereInput = {
  Editorial?: InputMaybe<EditorialWhereInput>;
};

export type ProductCardParentWhereUniqueInput = {
  Editorial?: InputMaybe<EditorialWhereUniqueInput>;
};

export type ProductCardUpdateInput = {
  /** cta input for default locale (en) */
  cta?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<ProductCardUpdateLocalizationsInput>;
  product?: InputMaybe<Scalars['Json']['input']>;
};

export type ProductCardUpdateLocalizationDataInput = {
  cta?: InputMaybe<Scalars['String']['input']>;
};

export type ProductCardUpdateLocalizationInput = {
  data: ProductCardUpdateLocalizationDataInput;
  locale: Locale;
};

export type ProductCardUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ProductCardCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ProductCardUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ProductCardUpsertLocalizationInput>>;
};

export type ProductCardUpdateManyInlineInput = {
  /** Create and connect multiple ProductCard component instances */
  create?: InputMaybe<Array<ProductCardCreateWithPositionInput>>;
  /** Delete multiple ProductCard documents */
  delete?: InputMaybe<Array<ProductCardWhereUniqueInput>>;
  /** Update multiple ProductCard component instances */
  update?: InputMaybe<Array<ProductCardUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ProductCard component instances */
  upsert?: InputMaybe<Array<ProductCardUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ProductCardUpdateManyInput = {
  /** cta input for default locale (en) */
  cta?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ProductCardUpdateManyLocalizationsInput>;
  product?: InputMaybe<Scalars['Json']['input']>;
};

export type ProductCardUpdateManyLocalizationDataInput = {
  cta?: InputMaybe<Scalars['String']['input']>;
};

export type ProductCardUpdateManyLocalizationInput = {
  data: ProductCardUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ProductCardUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ProductCardUpdateManyLocalizationInput>>;
};

export type ProductCardUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductCardUpdateManyInput;
  /** Document search */
  where: ProductCardWhereInput;
};

export type ProductCardUpdateOneInlineInput = {
  /** Create and connect one ProductCard document */
  create?: InputMaybe<ProductCardCreateInput>;
  /** Delete currently connected ProductCard document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProductCard document */
  update?: InputMaybe<ProductCardUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductCard document */
  upsert?: InputMaybe<ProductCardUpsertWithNestedWhereUniqueInput>;
};

export type ProductCardUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ProductCardUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProductCardWhereUniqueInput;
};

export type ProductCardUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductCardUpdateInput;
  /** Unique document search */
  where: ProductCardWhereUniqueInput;
};

export type ProductCardUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductCardCreateInput;
  /** Update document if it exists */
  update: ProductCardUpdateInput;
};

export type ProductCardUpsertLocalizationInput = {
  create: ProductCardCreateLocalizationDataInput;
  locale: Locale;
  update: ProductCardUpdateLocalizationDataInput;
};

export type ProductCardUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ProductCardUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProductCardWhereUniqueInput;
};

export type ProductCardUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductCardUpsertInput;
  /** Unique document search */
  where: ProductCardWhereUniqueInput;
};

/** Identifies documents */
export type ProductCardWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductCardWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductCardWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductCardWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  cta_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  cta_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  cta_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cta_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  cta_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  cta_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  cta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  cta_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  cta_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given json path. */
  product_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  product_value_recursive?: InputMaybe<Scalars['Json']['input']>;
};

/** References ProductCard record uniquely */
export type ProductCardWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductFocus = Entity & Node & {
  __typename?: 'ProductFocus';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  cta?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ProductFocus>;
  /** List of ProductFocus versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ProductFocus>;
  product?: Maybe<FederateThisSkincre_Product>;
  productId?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  url?: Maybe<Scalars['String']['output']>;
};


export type ProductFocusCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ProductFocusCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductFocusDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type ProductFocusHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type ProductFocusImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductFocusLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type ProductFocusPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ProductFocusPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductFocusScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ProductFocusUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ProductFocusUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductFocusConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductFocusWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductFocusConnection = {
  __typename?: 'ProductFocusConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductFocusEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductFocusCreateInput = {
  clpwv0kz4fus501unbh610x98?: InputMaybe<ProductHighlightCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** cta input for default locale (en) */
  cta?: InputMaybe<Scalars['String']['input']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ProductFocusCreateLocalizationsInput>;
  productId?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** url input for default locale (en) */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ProductFocusCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ProductFocusCreateLocalizationInput = {
  /** Localization input */
  data: ProductFocusCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductFocusCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ProductFocusCreateLocalizationInput>>;
};

export type ProductFocusCreateManyInlineInput = {
  /** Connect multiple existing ProductFocus documents */
  connect?: InputMaybe<Array<ProductFocusWhereUniqueInput>>;
  /** Create and connect multiple existing ProductFocus documents */
  create?: InputMaybe<Array<ProductFocusCreateInput>>;
};

export type ProductFocusCreateOneInlineInput = {
  /** Connect one existing ProductFocus document */
  connect?: InputMaybe<ProductFocusWhereUniqueInput>;
  /** Create and connect one ProductFocus document */
  create?: InputMaybe<ProductFocusCreateInput>;
};

/** An edge in a connection. */
export type ProductFocusEdge = {
  __typename?: 'ProductFocusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductFocus;
};

/** Identifies documents */
export type ProductFocusManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductFocusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductFocusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductFocusWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProductFocusWhereStageInput>;
  documentInStages_none?: InputMaybe<ProductFocusWhereStageInput>;
  documentInStages_some?: InputMaybe<ProductFocusWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  productId?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  productId_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  productId_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  productId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  productId_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  productId_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  productId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  productId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  productId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  productId_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ProductFocusOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CtaAsc = 'cta_ASC',
  CtaDesc = 'cta_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProductIdAsc = 'productId_ASC',
  ProductIdDesc = 'productId_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type ProductFocusUpdateInput = {
  clpwv0kz4fus501unbh610x98?: InputMaybe<ProductHighlightUpdateManyInlineInput>;
  /** cta input for default locale (en) */
  cta?: InputMaybe<Scalars['String']['input']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<ProductFocusUpdateLocalizationsInput>;
  productId?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  /** url input for default locale (en) */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ProductFocusUpdateLocalizationDataInput = {
  cta?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ProductFocusUpdateLocalizationInput = {
  data: ProductFocusUpdateLocalizationDataInput;
  locale: Locale;
};

export type ProductFocusUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ProductFocusCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ProductFocusUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ProductFocusUpsertLocalizationInput>>;
};

export type ProductFocusUpdateManyInlineInput = {
  /** Connect multiple existing ProductFocus documents */
  connect?: InputMaybe<Array<ProductFocusConnectInput>>;
  /** Create and connect multiple ProductFocus documents */
  create?: InputMaybe<Array<ProductFocusCreateInput>>;
  /** Delete multiple ProductFocus documents */
  delete?: InputMaybe<Array<ProductFocusWhereUniqueInput>>;
  /** Disconnect multiple ProductFocus documents */
  disconnect?: InputMaybe<Array<ProductFocusWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProductFocus documents */
  set?: InputMaybe<Array<ProductFocusWhereUniqueInput>>;
  /** Update multiple ProductFocus documents */
  update?: InputMaybe<Array<ProductFocusUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProductFocus documents */
  upsert?: InputMaybe<Array<ProductFocusUpsertWithNestedWhereUniqueInput>>;
};

export type ProductFocusUpdateManyInput = {
  /** cta input for default locale (en) */
  cta?: InputMaybe<Scalars['String']['input']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ProductFocusUpdateManyLocalizationsInput>;
  productId?: InputMaybe<Scalars['String']['input']>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  /** url input for default locale (en) */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ProductFocusUpdateManyLocalizationDataInput = {
  cta?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ProductFocusUpdateManyLocalizationInput = {
  data: ProductFocusUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ProductFocusUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ProductFocusUpdateManyLocalizationInput>>;
};

export type ProductFocusUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductFocusUpdateManyInput;
  /** Document search */
  where: ProductFocusWhereInput;
};

export type ProductFocusUpdateOneInlineInput = {
  /** Connect existing ProductFocus document */
  connect?: InputMaybe<ProductFocusWhereUniqueInput>;
  /** Create and connect one ProductFocus document */
  create?: InputMaybe<ProductFocusCreateInput>;
  /** Delete currently connected ProductFocus document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ProductFocus document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProductFocus document */
  update?: InputMaybe<ProductFocusUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductFocus document */
  upsert?: InputMaybe<ProductFocusUpsertWithNestedWhereUniqueInput>;
};

export type ProductFocusUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductFocusUpdateInput;
  /** Unique document search */
  where: ProductFocusWhereUniqueInput;
};

export type ProductFocusUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductFocusCreateInput;
  /** Update document if it exists */
  update: ProductFocusUpdateInput;
};

export type ProductFocusUpsertLocalizationInput = {
  create: ProductFocusCreateLocalizationDataInput;
  locale: Locale;
  update: ProductFocusUpdateLocalizationDataInput;
};

export type ProductFocusUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductFocusUpsertInput;
  /** Unique document search */
  where: ProductFocusWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProductFocusWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ProductFocusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductFocusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductFocusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductFocusWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  cta?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  cta_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  cta_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  cta_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cta_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  cta_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  cta_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  cta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  cta_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  cta_starts_with?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<ProductFocusWhereStageInput>;
  documentInStages_none?: InputMaybe<ProductFocusWhereStageInput>;
  documentInStages_some?: InputMaybe<ProductFocusWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  productId?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  productId_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  productId_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  productId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  productId_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  productId_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  productId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  productId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  productId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  productId_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProductFocusWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductFocusWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductFocusWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductFocusWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProductFocusWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References ProductFocus record uniquely */
export type ProductFocusWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductHighlight = Entity & {
  __typename?: 'ProductHighlight';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  productFocus?: Maybe<ProductFocus>;
  /** System stage field */
  stage: Stage;
};


export type ProductHighlightProductFocusArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductHighlightConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductHighlightWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductHighlightConnection = {
  __typename?: 'ProductHighlightConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductHighlightEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductHighlightCreateInput = {
  productFocus?: InputMaybe<ProductFocusCreateOneInlineInput>;
};

export type ProductHighlightCreateManyInlineInput = {
  /** Create and connect multiple existing ProductHighlight documents */
  create?: InputMaybe<Array<ProductHighlightCreateInput>>;
};

export type ProductHighlightCreateOneInlineInput = {
  /** Create and connect one ProductHighlight document */
  create?: InputMaybe<ProductHighlightCreateInput>;
};

export type ProductHighlightCreateWithPositionInput = {
  /** Document to create */
  data: ProductHighlightCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ProductHighlightEdge = {
  __typename?: 'ProductHighlightEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductHighlight;
};

/** Identifies documents */
export type ProductHighlightManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductHighlightWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductHighlightWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductHighlightWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  productFocus?: InputMaybe<ProductFocusWhereInput>;
};

export enum ProductHighlightOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type ProductHighlightParent = Page;

export type ProductHighlightParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type ProductHighlightParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type ProductHighlightParentCreateManyInlineInput = {
  /** Connect multiple existing ProductHighlightParent documents */
  connect?: InputMaybe<Array<ProductHighlightParentWhereUniqueInput>>;
  /** Create and connect multiple existing ProductHighlightParent documents */
  create?: InputMaybe<Array<ProductHighlightParentCreateInput>>;
};

export type ProductHighlightParentCreateOneInlineInput = {
  /** Connect one existing ProductHighlightParent document */
  connect?: InputMaybe<ProductHighlightParentWhereUniqueInput>;
  /** Create and connect one ProductHighlightParent document */
  create?: InputMaybe<ProductHighlightParentCreateInput>;
};

export type ProductHighlightParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type ProductHighlightParentUpdateManyInlineInput = {
  /** Connect multiple existing ProductHighlightParent documents */
  connect?: InputMaybe<Array<ProductHighlightParentConnectInput>>;
  /** Create and connect multiple ProductHighlightParent documents */
  create?: InputMaybe<Array<ProductHighlightParentCreateInput>>;
  /** Delete multiple ProductHighlightParent documents */
  delete?: InputMaybe<Array<ProductHighlightParentWhereUniqueInput>>;
  /** Disconnect multiple ProductHighlightParent documents */
  disconnect?: InputMaybe<Array<ProductHighlightParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProductHighlightParent documents */
  set?: InputMaybe<Array<ProductHighlightParentWhereUniqueInput>>;
  /** Update multiple ProductHighlightParent documents */
  update?: InputMaybe<Array<ProductHighlightParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProductHighlightParent documents */
  upsert?: InputMaybe<Array<ProductHighlightParentUpsertWithNestedWhereUniqueInput>>;
};

export type ProductHighlightParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type ProductHighlightParentUpdateOneInlineInput = {
  /** Connect existing ProductHighlightParent document */
  connect?: InputMaybe<ProductHighlightParentWhereUniqueInput>;
  /** Create and connect one ProductHighlightParent document */
  create?: InputMaybe<ProductHighlightParentCreateInput>;
  /** Delete currently connected ProductHighlightParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ProductHighlightParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProductHighlightParent document */
  update?: InputMaybe<ProductHighlightParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductHighlightParent document */
  upsert?: InputMaybe<ProductHighlightParentUpsertWithNestedWhereUniqueInput>;
};

export type ProductHighlightParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type ProductHighlightParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type ProductHighlightParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type ProductHighlightParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type ProductHighlightUpdateInput = {
  productFocus?: InputMaybe<ProductFocusUpdateOneInlineInput>;
};

export type ProductHighlightUpdateManyInlineInput = {
  /** Create and connect multiple ProductHighlight component instances */
  create?: InputMaybe<Array<ProductHighlightCreateWithPositionInput>>;
  /** Delete multiple ProductHighlight documents */
  delete?: InputMaybe<Array<ProductHighlightWhereUniqueInput>>;
  /** Update multiple ProductHighlight component instances */
  update?: InputMaybe<Array<ProductHighlightUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ProductHighlight component instances */
  upsert?: InputMaybe<Array<ProductHighlightUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ProductHighlightUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type ProductHighlightUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductHighlightUpdateManyInput;
  /** Document search */
  where: ProductHighlightWhereInput;
};

export type ProductHighlightUpdateOneInlineInput = {
  /** Create and connect one ProductHighlight document */
  create?: InputMaybe<ProductHighlightCreateInput>;
  /** Delete currently connected ProductHighlight document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProductHighlight document */
  update?: InputMaybe<ProductHighlightUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductHighlight document */
  upsert?: InputMaybe<ProductHighlightUpsertWithNestedWhereUniqueInput>;
};

export type ProductHighlightUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ProductHighlightUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProductHighlightWhereUniqueInput;
};

export type ProductHighlightUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductHighlightUpdateInput;
  /** Unique document search */
  where: ProductHighlightWhereUniqueInput;
};

export type ProductHighlightUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductHighlightCreateInput;
  /** Update document if it exists */
  update: ProductHighlightUpdateInput;
};

export type ProductHighlightUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ProductHighlightUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProductHighlightWhereUniqueInput;
};

export type ProductHighlightUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductHighlightUpsertInput;
  /** Unique document search */
  where: ProductHighlightWhereUniqueInput;
};

/** Identifies documents */
export type ProductHighlightWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductHighlightWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductHighlightWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductHighlightWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  productFocus?: InputMaybe<ProductFocusWhereInput>;
};

/** References ProductHighlight record uniquely */
export type ProductHighlightWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductList = Entity & {
  __typename?: 'ProductList';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ProductList>;
  relatedProductList?: Maybe<RelatedProductList>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
};


export type ProductListLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type ProductListRelatedProductListArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductListConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductListWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductListConnection = {
  __typename?: 'ProductListConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductListEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductListCreateInput = {
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ProductListCreateLocalizationsInput>;
  relatedProductList?: InputMaybe<RelatedProductListCreateOneInlineInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProductListCreateLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProductListCreateLocalizationInput = {
  /** Localization input */
  data: ProductListCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductListCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ProductListCreateLocalizationInput>>;
};

export type ProductListCreateManyInlineInput = {
  /** Create and connect multiple existing ProductList documents */
  create?: InputMaybe<Array<ProductListCreateInput>>;
};

export type ProductListCreateOneInlineInput = {
  /** Create and connect one ProductList document */
  create?: InputMaybe<ProductListCreateInput>;
};

export type ProductListCreateWithPositionInput = {
  /** Document to create */
  data: ProductListCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ProductListEdge = {
  __typename?: 'ProductListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductList;
};

/** Identifies documents */
export type ProductListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  relatedProductList?: InputMaybe<RelatedProductListWhereInput>;
};

export enum ProductListOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ProductListParent = Pdp;

export type ProductListParentConnectInput = {
  Pdp?: InputMaybe<PdpConnectInput>;
};

export type ProductListParentCreateInput = {
  Pdp?: InputMaybe<PdpCreateInput>;
};

export type ProductListParentCreateManyInlineInput = {
  /** Connect multiple existing ProductListParent documents */
  connect?: InputMaybe<Array<ProductListParentWhereUniqueInput>>;
  /** Create and connect multiple existing ProductListParent documents */
  create?: InputMaybe<Array<ProductListParentCreateInput>>;
};

export type ProductListParentCreateOneInlineInput = {
  /** Connect one existing ProductListParent document */
  connect?: InputMaybe<ProductListParentWhereUniqueInput>;
  /** Create and connect one ProductListParent document */
  create?: InputMaybe<ProductListParentCreateInput>;
};

export type ProductListParentUpdateInput = {
  Pdp?: InputMaybe<PdpUpdateInput>;
};

export type ProductListParentUpdateManyInlineInput = {
  /** Connect multiple existing ProductListParent documents */
  connect?: InputMaybe<Array<ProductListParentConnectInput>>;
  /** Create and connect multiple ProductListParent documents */
  create?: InputMaybe<Array<ProductListParentCreateInput>>;
  /** Delete multiple ProductListParent documents */
  delete?: InputMaybe<Array<ProductListParentWhereUniqueInput>>;
  /** Disconnect multiple ProductListParent documents */
  disconnect?: InputMaybe<Array<ProductListParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProductListParent documents */
  set?: InputMaybe<Array<ProductListParentWhereUniqueInput>>;
  /** Update multiple ProductListParent documents */
  update?: InputMaybe<Array<ProductListParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProductListParent documents */
  upsert?: InputMaybe<Array<ProductListParentUpsertWithNestedWhereUniqueInput>>;
};

export type ProductListParentUpdateManyWithNestedWhereInput = {
  Pdp?: InputMaybe<PdpUpdateManyWithNestedWhereInput>;
};

export type ProductListParentUpdateOneInlineInput = {
  /** Connect existing ProductListParent document */
  connect?: InputMaybe<ProductListParentWhereUniqueInput>;
  /** Create and connect one ProductListParent document */
  create?: InputMaybe<ProductListParentCreateInput>;
  /** Delete currently connected ProductListParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ProductListParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProductListParent document */
  update?: InputMaybe<ProductListParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductListParent document */
  upsert?: InputMaybe<ProductListParentUpsertWithNestedWhereUniqueInput>;
};

export type ProductListParentUpdateWithNestedWhereUniqueInput = {
  Pdp?: InputMaybe<PdpUpdateWithNestedWhereUniqueInput>;
};

export type ProductListParentUpsertWithNestedWhereUniqueInput = {
  Pdp?: InputMaybe<PdpUpsertWithNestedWhereUniqueInput>;
};

export type ProductListParentWhereInput = {
  Pdp?: InputMaybe<PdpWhereInput>;
};

export type ProductListParentWhereUniqueInput = {
  Pdp?: InputMaybe<PdpWhereUniqueInput>;
};

export type ProductListUpdateInput = {
  /** Manage document localizations */
  localizations?: InputMaybe<ProductListUpdateLocalizationsInput>;
  relatedProductList?: InputMaybe<RelatedProductListUpdateOneInlineInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProductListUpdateLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProductListUpdateLocalizationInput = {
  data: ProductListUpdateLocalizationDataInput;
  locale: Locale;
};

export type ProductListUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ProductListCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ProductListUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ProductListUpsertLocalizationInput>>;
};

export type ProductListUpdateManyInlineInput = {
  /** Create and connect multiple ProductList component instances */
  create?: InputMaybe<Array<ProductListCreateWithPositionInput>>;
  /** Delete multiple ProductList documents */
  delete?: InputMaybe<Array<ProductListWhereUniqueInput>>;
  /** Update multiple ProductList component instances */
  update?: InputMaybe<Array<ProductListUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ProductList component instances */
  upsert?: InputMaybe<Array<ProductListUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ProductListUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<ProductListUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProductListUpdateManyLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProductListUpdateManyLocalizationInput = {
  data: ProductListUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ProductListUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ProductListUpdateManyLocalizationInput>>;
};

export type ProductListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductListUpdateManyInput;
  /** Document search */
  where: ProductListWhereInput;
};

export type ProductListUpdateOneInlineInput = {
  /** Create and connect one ProductList document */
  create?: InputMaybe<ProductListCreateInput>;
  /** Delete currently connected ProductList document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProductList document */
  update?: InputMaybe<ProductListUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductList document */
  upsert?: InputMaybe<ProductListUpsertWithNestedWhereUniqueInput>;
};

export type ProductListUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ProductListUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProductListWhereUniqueInput;
};

export type ProductListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductListUpdateInput;
  /** Unique document search */
  where: ProductListWhereUniqueInput;
};

export type ProductListUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductListCreateInput;
  /** Update document if it exists */
  update: ProductListUpdateInput;
};

export type ProductListUpsertLocalizationInput = {
  create: ProductListCreateLocalizationDataInput;
  locale: Locale;
  update: ProductListUpdateLocalizationDataInput;
};

export type ProductListUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ProductListUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ProductListWhereUniqueInput;
};

export type ProductListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductListUpsertInput;
  /** Unique document search */
  where: ProductListWhereUniqueInput;
};

/** Identifies documents */
export type ProductListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  relatedProductList?: InputMaybe<RelatedProductListWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References ProductList record uniquely */
export type ProductListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Retrieve a single navigation */
  navigation?: Maybe<Navigation>;
  /** Retrieve document version */
  navigationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple navigations */
  navigations: Array<Navigation>;
  /** Retrieve multiple navigations using the Relay connection interface */
  navigationsConnection: NavigationConnection;
  /** Retrieve a single newsletterSubscriber */
  newsletterSubscriber?: Maybe<NewsletterSubscriber>;
  /** Retrieve document version */
  newsletterSubscriberVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple newsletterSubscribers */
  newsletterSubscribers: Array<NewsletterSubscriber>;
  /** Retrieve multiple newsletterSubscribers using the Relay connection interface */
  newsletterSubscribersConnection: NewsletterSubscriberConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve a single pdp */
  pdp?: Maybe<Pdp>;
  /** Retrieve document version */
  pdpVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pdps */
  pdps: Array<Pdp>;
  /** Retrieve multiple pdps using the Relay connection interface */
  pdpsConnection: PdpConnection;
  /** Retrieve multiple productFoci */
  productFoci: Array<ProductFocus>;
  /** Retrieve multiple productFoci using the Relay connection interface */
  productFociConnection: ProductFocusConnection;
  /** Retrieve a single productFocus */
  productFocus?: Maybe<ProductFocus>;
  /** Retrieve document version */
  productFocusVersion?: Maybe<DocumentVersion>;
  products?: Maybe<Array<FederateThisSkincre_Product>>;
  /** Retrieve a single relatedProductList */
  relatedProductList?: Maybe<RelatedProductList>;
  /** Retrieve document version */
  relatedProductListVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple relatedProductLists */
  relatedProductLists: Array<RelatedProductList>;
  /** Retrieve multiple relatedProductLists using the Relay connection interface */
  relatedProductListsConnection: RelatedProductListConnection;
  reviews?: Maybe<FederateThisReviews_Reviews>;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryEntitiesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  where: Array<EntityWhereInput>;
};


export type QueryNavigationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NavigationWhereUniqueInput;
};


export type QueryNavigationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNavigationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavigationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<NavigationWhereInput>;
};


export type QueryNavigationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavigationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<NavigationWhereInput>;
};


export type QueryNewsletterSubscriberArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NewsletterSubscriberWhereUniqueInput;
};


export type QueryNewsletterSubscriberVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNewsletterSubscribersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NewsletterSubscriberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<NewsletterSubscriberWhereInput>;
};


export type QueryNewsletterSubscribersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NewsletterSubscriberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<NewsletterSubscriberWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageWhereUniqueInput;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPdpArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PdpWhereUniqueInput;
};


export type QueryPdpVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPdpsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PdpOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PdpWhereInput>;
};


export type QueryPdpsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PdpOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PdpWhereInput>;
};


export type QueryProductFociArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductFocusOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProductFocusWhereInput>;
};


export type QueryProductFociConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductFocusOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProductFocusWhereInput>;
};


export type QueryProductFocusArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProductFocusWhereUniqueInput;
};


export type QueryProductFocusVersionArgs = {
  where: VersionWhereInput;
};


export type QueryRelatedProductListArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: RelatedProductListWhereUniqueInput;
};


export type QueryRelatedProductListVersionArgs = {
  where: VersionWhereInput;
};


export type QueryRelatedProductListsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<RelatedProductListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<RelatedProductListWhereInput>;
};


export type QueryRelatedProductListsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<RelatedProductListOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<RelatedProductListWhereInput>;
};


export type QueryReviewsArgs = {
  reviewID?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

export type RelatedProductList = Entity & Node & {
  __typename?: 'RelatedProductList';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<RelatedProductList>;
  /** List of RelatedProductList versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  relatedProductId?: Maybe<Scalars['String']['output']>;
  relatedProducts?: Maybe<FederateThisSkincre_Related>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type RelatedProductListCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type RelatedProductListDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type RelatedProductListHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type RelatedProductListPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type RelatedProductListScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type RelatedProductListUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type RelatedProductListConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: RelatedProductListWhereUniqueInput;
};

/** A connection to a list of items. */
export type RelatedProductListConnection = {
  __typename?: 'RelatedProductListConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<RelatedProductListEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type RelatedProductListCreateInput = {
  clq3rspn8aq0901tef0us1bb7?: InputMaybe<ProductListCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  relatedProductId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RelatedProductListCreateManyInlineInput = {
  /** Connect multiple existing RelatedProductList documents */
  connect?: InputMaybe<Array<RelatedProductListWhereUniqueInput>>;
  /** Create and connect multiple existing RelatedProductList documents */
  create?: InputMaybe<Array<RelatedProductListCreateInput>>;
};

export type RelatedProductListCreateOneInlineInput = {
  /** Connect one existing RelatedProductList document */
  connect?: InputMaybe<RelatedProductListWhereUniqueInput>;
  /** Create and connect one RelatedProductList document */
  create?: InputMaybe<RelatedProductListCreateInput>;
};

/** An edge in a connection. */
export type RelatedProductListEdge = {
  __typename?: 'RelatedProductListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: RelatedProductList;
};

/** Identifies documents */
export type RelatedProductListManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RelatedProductListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RelatedProductListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RelatedProductListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<RelatedProductListWhereStageInput>;
  documentInStages_none?: InputMaybe<RelatedProductListWhereStageInput>;
  documentInStages_some?: InputMaybe<RelatedProductListWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  relatedProductId?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  relatedProductId_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  relatedProductId_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  relatedProductId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  relatedProductId_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  relatedProductId_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  relatedProductId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  relatedProductId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  relatedProductId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  relatedProductId_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum RelatedProductListOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RelatedProductIdAsc = 'relatedProductId_ASC',
  RelatedProductIdDesc = 'relatedProductId_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type RelatedProductListUpdateInput = {
  clq3rspn8aq0901tef0us1bb7?: InputMaybe<ProductListUpdateManyInlineInput>;
  relatedProductId?: InputMaybe<Scalars['String']['input']>;
};

export type RelatedProductListUpdateManyInlineInput = {
  /** Connect multiple existing RelatedProductList documents */
  connect?: InputMaybe<Array<RelatedProductListConnectInput>>;
  /** Create and connect multiple RelatedProductList documents */
  create?: InputMaybe<Array<RelatedProductListCreateInput>>;
  /** Delete multiple RelatedProductList documents */
  delete?: InputMaybe<Array<RelatedProductListWhereUniqueInput>>;
  /** Disconnect multiple RelatedProductList documents */
  disconnect?: InputMaybe<Array<RelatedProductListWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing RelatedProductList documents */
  set?: InputMaybe<Array<RelatedProductListWhereUniqueInput>>;
  /** Update multiple RelatedProductList documents */
  update?: InputMaybe<Array<RelatedProductListUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple RelatedProductList documents */
  upsert?: InputMaybe<Array<RelatedProductListUpsertWithNestedWhereUniqueInput>>;
};

export type RelatedProductListUpdateManyInput = {
  relatedProductId?: InputMaybe<Scalars['String']['input']>;
};

export type RelatedProductListUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: RelatedProductListUpdateManyInput;
  /** Document search */
  where: RelatedProductListWhereInput;
};

export type RelatedProductListUpdateOneInlineInput = {
  /** Connect existing RelatedProductList document */
  connect?: InputMaybe<RelatedProductListWhereUniqueInput>;
  /** Create and connect one RelatedProductList document */
  create?: InputMaybe<RelatedProductListCreateInput>;
  /** Delete currently connected RelatedProductList document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected RelatedProductList document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single RelatedProductList document */
  update?: InputMaybe<RelatedProductListUpdateWithNestedWhereUniqueInput>;
  /** Upsert single RelatedProductList document */
  upsert?: InputMaybe<RelatedProductListUpsertWithNestedWhereUniqueInput>;
};

export type RelatedProductListUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: RelatedProductListUpdateInput;
  /** Unique document search */
  where: RelatedProductListWhereUniqueInput;
};

export type RelatedProductListUpsertInput = {
  /** Create document if it didn't exist */
  create: RelatedProductListCreateInput;
  /** Update document if it exists */
  update: RelatedProductListUpdateInput;
};

export type RelatedProductListUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: RelatedProductListUpsertInput;
  /** Unique document search */
  where: RelatedProductListWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type RelatedProductListWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type RelatedProductListWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RelatedProductListWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RelatedProductListWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RelatedProductListWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<RelatedProductListWhereStageInput>;
  documentInStages_none?: InputMaybe<RelatedProductListWhereStageInput>;
  documentInStages_some?: InputMaybe<RelatedProductListWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  relatedProductId?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  relatedProductId_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  relatedProductId_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  relatedProductId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  relatedProductId_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  relatedProductId_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  relatedProductId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  relatedProductId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  relatedProductId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  relatedProductId_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type RelatedProductListWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RelatedProductListWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RelatedProductListWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RelatedProductListWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<RelatedProductListWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References RelatedProductList record uniquely */
export type RelatedProductListWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

export type Routine = Entity & {
  __typename?: 'Routine';
  chapeau?: Maybe<Scalars['String']['output']>;
  cta?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Routine>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type RoutineImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type RoutineLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};

export type RoutineConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: RoutineWhereUniqueInput;
};

/** A connection to a list of items. */
export type RoutineConnection = {
  __typename?: 'RoutineConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<RoutineEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type RoutineCreateInput = {
  /** chapeau input for default locale (en) */
  chapeau?: InputMaybe<Scalars['String']['input']>;
  /** cta input for default locale (en) */
  cta?: InputMaybe<Scalars['String']['input']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<RoutineCreateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  /** url input for default locale (en) */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type RoutineCreateLocalizationDataInput = {
  chapeau?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type RoutineCreateLocalizationInput = {
  /** Localization input */
  data: RoutineCreateLocalizationDataInput;
  locale: Locale;
};

export type RoutineCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<RoutineCreateLocalizationInput>>;
};

export type RoutineCreateManyInlineInput = {
  /** Create and connect multiple existing Routine documents */
  create?: InputMaybe<Array<RoutineCreateInput>>;
};

export type RoutineCreateOneInlineInput = {
  /** Create and connect one Routine document */
  create?: InputMaybe<RoutineCreateInput>;
};

export type RoutineCreateWithPositionInput = {
  /** Document to create */
  data: RoutineCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type RoutineEdge = {
  __typename?: 'RoutineEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Routine;
};

/** Identifies documents */
export type RoutineManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RoutineWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RoutineWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RoutineWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
};

export enum RoutineOrderByInput {
  ChapeauAsc = 'chapeau_ASC',
  ChapeauDesc = 'chapeau_DESC',
  CtaAsc = 'cta_ASC',
  CtaDesc = 'cta_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type RoutineParent = Page | Pdp;

export type RoutineParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
  Pdp?: InputMaybe<PdpConnectInput>;
};

export type RoutineParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
  Pdp?: InputMaybe<PdpCreateInput>;
};

export type RoutineParentCreateManyInlineInput = {
  /** Connect multiple existing RoutineParent documents */
  connect?: InputMaybe<Array<RoutineParentWhereUniqueInput>>;
  /** Create and connect multiple existing RoutineParent documents */
  create?: InputMaybe<Array<RoutineParentCreateInput>>;
};

export type RoutineParentCreateOneInlineInput = {
  /** Connect one existing RoutineParent document */
  connect?: InputMaybe<RoutineParentWhereUniqueInput>;
  /** Create and connect one RoutineParent document */
  create?: InputMaybe<RoutineParentCreateInput>;
};

export type RoutineParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
  Pdp?: InputMaybe<PdpUpdateInput>;
};

export type RoutineParentUpdateManyInlineInput = {
  /** Connect multiple existing RoutineParent documents */
  connect?: InputMaybe<Array<RoutineParentConnectInput>>;
  /** Create and connect multiple RoutineParent documents */
  create?: InputMaybe<Array<RoutineParentCreateInput>>;
  /** Delete multiple RoutineParent documents */
  delete?: InputMaybe<Array<RoutineParentWhereUniqueInput>>;
  /** Disconnect multiple RoutineParent documents */
  disconnect?: InputMaybe<Array<RoutineParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing RoutineParent documents */
  set?: InputMaybe<Array<RoutineParentWhereUniqueInput>>;
  /** Update multiple RoutineParent documents */
  update?: InputMaybe<Array<RoutineParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple RoutineParent documents */
  upsert?: InputMaybe<Array<RoutineParentUpsertWithNestedWhereUniqueInput>>;
};

export type RoutineParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
  Pdp?: InputMaybe<PdpUpdateManyWithNestedWhereInput>;
};

export type RoutineParentUpdateOneInlineInput = {
  /** Connect existing RoutineParent document */
  connect?: InputMaybe<RoutineParentWhereUniqueInput>;
  /** Create and connect one RoutineParent document */
  create?: InputMaybe<RoutineParentCreateInput>;
  /** Delete currently connected RoutineParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected RoutineParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single RoutineParent document */
  update?: InputMaybe<RoutineParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single RoutineParent document */
  upsert?: InputMaybe<RoutineParentUpsertWithNestedWhereUniqueInput>;
};

export type RoutineParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  Pdp?: InputMaybe<PdpUpdateWithNestedWhereUniqueInput>;
};

export type RoutineParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
  Pdp?: InputMaybe<PdpUpsertWithNestedWhereUniqueInput>;
};

export type RoutineParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
  Pdp?: InputMaybe<PdpWhereInput>;
};

export type RoutineParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
  Pdp?: InputMaybe<PdpWhereUniqueInput>;
};

export type RoutineUpdateInput = {
  /** chapeau input for default locale (en) */
  chapeau?: InputMaybe<Scalars['String']['input']>;
  /** cta input for default locale (en) */
  cta?: InputMaybe<Scalars['String']['input']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<RoutineUpdateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  /** url input for default locale (en) */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type RoutineUpdateLocalizationDataInput = {
  chapeau?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type RoutineUpdateLocalizationInput = {
  data: RoutineUpdateLocalizationDataInput;
  locale: Locale;
};

export type RoutineUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<RoutineCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<RoutineUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<RoutineUpsertLocalizationInput>>;
};

export type RoutineUpdateManyInlineInput = {
  /** Create and connect multiple Routine component instances */
  create?: InputMaybe<Array<RoutineCreateWithPositionInput>>;
  /** Delete multiple Routine documents */
  delete?: InputMaybe<Array<RoutineWhereUniqueInput>>;
  /** Update multiple Routine component instances */
  update?: InputMaybe<Array<RoutineUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Routine component instances */
  upsert?: InputMaybe<Array<RoutineUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type RoutineUpdateManyInput = {
  /** chapeau input for default locale (en) */
  chapeau?: InputMaybe<Scalars['String']['input']>;
  /** cta input for default locale (en) */
  cta?: InputMaybe<Scalars['String']['input']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<RoutineUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  /** url input for default locale (en) */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type RoutineUpdateManyLocalizationDataInput = {
  chapeau?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type RoutineUpdateManyLocalizationInput = {
  data: RoutineUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type RoutineUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<RoutineUpdateManyLocalizationInput>>;
};

export type RoutineUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: RoutineUpdateManyInput;
  /** Document search */
  where: RoutineWhereInput;
};

export type RoutineUpdateOneInlineInput = {
  /** Create and connect one Routine document */
  create?: InputMaybe<RoutineCreateInput>;
  /** Delete currently connected Routine document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Routine document */
  update?: InputMaybe<RoutineUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Routine document */
  upsert?: InputMaybe<RoutineUpsertWithNestedWhereUniqueInput>;
};

export type RoutineUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<RoutineUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: RoutineWhereUniqueInput;
};

export type RoutineUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: RoutineUpdateInput;
  /** Unique document search */
  where: RoutineWhereUniqueInput;
};

export type RoutineUpsertInput = {
  /** Create document if it didn't exist */
  create: RoutineCreateInput;
  /** Update document if it exists */
  update: RoutineUpdateInput;
};

export type RoutineUpsertLocalizationInput = {
  create: RoutineCreateLocalizationDataInput;
  locale: Locale;
  update: RoutineUpdateLocalizationDataInput;
};

export type RoutineUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<RoutineUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: RoutineWhereUniqueInput;
};

export type RoutineUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: RoutineUpsertInput;
  /** Unique document search */
  where: RoutineWhereUniqueInput;
};

/** Identifies documents */
export type RoutineWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RoutineWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RoutineWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RoutineWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  chapeau?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  chapeau_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  chapeau_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  chapeau_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  chapeau_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  chapeau_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  chapeau_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  chapeau_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  chapeau_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  chapeau_starts_with?: InputMaybe<Scalars['String']['input']>;
  cta?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  cta_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  cta_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  cta_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cta_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  cta_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  cta_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  cta_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  cta_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  cta_starts_with?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Routine record uniquely */
export type RoutineWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Navigation | NewsletterSubscriber | Page | Pdp | ProductFocus | RelatedProductList;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export enum Theme {
  Dark = 'dark',
  Light = 'light'
}

export type Tutorial = Entity & {
  __typename?: 'Tutorial';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  items: Array<TutorialItem>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Tutorial>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
};


export type TutorialImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TutorialItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TutorialItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TutorialItemWhereInput>;
};


export type TutorialLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};

export type TutorialConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TutorialWhereUniqueInput;
};

/** A connection to a list of items. */
export type TutorialConnection = {
  __typename?: 'TutorialConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TutorialEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TutorialCreateInput = {
  image?: InputMaybe<AssetCreateOneInlineInput>;
  items?: InputMaybe<TutorialItemCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<TutorialCreateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TutorialCreateLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TutorialCreateLocalizationInput = {
  /** Localization input */
  data: TutorialCreateLocalizationDataInput;
  locale: Locale;
};

export type TutorialCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<TutorialCreateLocalizationInput>>;
};

export type TutorialCreateManyInlineInput = {
  /** Create and connect multiple existing Tutorial documents */
  create?: InputMaybe<Array<TutorialCreateInput>>;
};

export type TutorialCreateOneInlineInput = {
  /** Create and connect one Tutorial document */
  create?: InputMaybe<TutorialCreateInput>;
};

export type TutorialCreateWithPositionInput = {
  /** Document to create */
  data: TutorialCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TutorialEdge = {
  __typename?: 'TutorialEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Tutorial;
};

export type TutorialItem = Entity & {
  __typename?: 'TutorialItem';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<TutorialItem>;
  /** System stage field */
  stage: Stage;
  text?: Maybe<Scalars['String']['output']>;
};


export type TutorialItemLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};

export type TutorialItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TutorialItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type TutorialItemConnection = {
  __typename?: 'TutorialItemConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TutorialItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TutorialItemCreateInput = {
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<TutorialItemCreateLocalizationsInput>;
  /** text input for default locale (en) */
  text?: InputMaybe<Scalars['String']['input']>;
};

export type TutorialItemCreateLocalizationDataInput = {
  text?: InputMaybe<Scalars['String']['input']>;
};

export type TutorialItemCreateLocalizationInput = {
  /** Localization input */
  data: TutorialItemCreateLocalizationDataInput;
  locale: Locale;
};

export type TutorialItemCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<TutorialItemCreateLocalizationInput>>;
};

export type TutorialItemCreateManyInlineInput = {
  /** Create and connect multiple existing TutorialItem documents */
  create?: InputMaybe<Array<TutorialItemCreateInput>>;
};

export type TutorialItemCreateOneInlineInput = {
  /** Create and connect one TutorialItem document */
  create?: InputMaybe<TutorialItemCreateInput>;
};

export type TutorialItemCreateWithPositionInput = {
  /** Document to create */
  data: TutorialItemCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TutorialItemEdge = {
  __typename?: 'TutorialItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TutorialItem;
};

/** Identifies documents */
export type TutorialItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TutorialItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TutorialItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TutorialItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum TutorialItemOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

export type TutorialItemParent = Tutorial;

export type TutorialItemParentConnectInput = {
  Tutorial?: InputMaybe<TutorialConnectInput>;
};

export type TutorialItemParentCreateInput = {
  Tutorial?: InputMaybe<TutorialCreateInput>;
};

export type TutorialItemParentCreateManyInlineInput = {
  /** Create and connect multiple existing TutorialItemParent documents */
  create?: InputMaybe<Array<TutorialItemParentCreateInput>>;
};

export type TutorialItemParentCreateOneInlineInput = {
  /** Create and connect one TutorialItemParent document */
  create?: InputMaybe<TutorialItemParentCreateInput>;
};

export type TutorialItemParentCreateWithPositionInput = {
  Tutorial?: InputMaybe<TutorialCreateWithPositionInput>;
};

export type TutorialItemParentUpdateInput = {
  Tutorial?: InputMaybe<TutorialUpdateInput>;
};

export type TutorialItemParentUpdateManyInlineInput = {
  /** Create and connect multiple TutorialItemParent component instances */
  create?: InputMaybe<Array<TutorialItemParentCreateWithPositionInput>>;
  /** Delete multiple TutorialItemParent documents */
  delete?: InputMaybe<Array<TutorialItemParentWhereUniqueInput>>;
  /** Update multiple TutorialItemParent component instances */
  update?: InputMaybe<Array<TutorialItemParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TutorialItemParent component instances */
  upsert?: InputMaybe<Array<TutorialItemParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TutorialItemParentUpdateManyWithNestedWhereInput = {
  Tutorial?: InputMaybe<TutorialUpdateManyWithNestedWhereInput>;
};

export type TutorialItemParentUpdateOneInlineInput = {
  /** Create and connect one TutorialItemParent document */
  create?: InputMaybe<TutorialItemParentCreateInput>;
  /** Delete currently connected TutorialItemParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TutorialItemParent document */
  update?: InputMaybe<TutorialItemParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TutorialItemParent document */
  upsert?: InputMaybe<TutorialItemParentUpsertWithNestedWhereUniqueInput>;
};

export type TutorialItemParentUpdateWithNestedWhereUniqueAndPositionInput = {
  Tutorial?: InputMaybe<TutorialUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type TutorialItemParentUpdateWithNestedWhereUniqueInput = {
  Tutorial?: InputMaybe<TutorialUpdateWithNestedWhereUniqueInput>;
};

export type TutorialItemParentUpsertWithNestedWhereUniqueAndPositionInput = {
  Tutorial?: InputMaybe<TutorialUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type TutorialItemParentUpsertWithNestedWhereUniqueInput = {
  Tutorial?: InputMaybe<TutorialUpsertWithNestedWhereUniqueInput>;
};

export type TutorialItemParentWhereInput = {
  Tutorial?: InputMaybe<TutorialWhereInput>;
};

export type TutorialItemParentWhereUniqueInput = {
  Tutorial?: InputMaybe<TutorialWhereUniqueInput>;
};

export type TutorialItemUpdateInput = {
  /** Manage document localizations */
  localizations?: InputMaybe<TutorialItemUpdateLocalizationsInput>;
  /** text input for default locale (en) */
  text?: InputMaybe<Scalars['String']['input']>;
};

export type TutorialItemUpdateLocalizationDataInput = {
  text?: InputMaybe<Scalars['String']['input']>;
};

export type TutorialItemUpdateLocalizationInput = {
  data: TutorialItemUpdateLocalizationDataInput;
  locale: Locale;
};

export type TutorialItemUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<TutorialItemCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<TutorialItemUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<TutorialItemUpsertLocalizationInput>>;
};

export type TutorialItemUpdateManyInlineInput = {
  /** Create and connect multiple TutorialItem component instances */
  create?: InputMaybe<Array<TutorialItemCreateWithPositionInput>>;
  /** Delete multiple TutorialItem documents */
  delete?: InputMaybe<Array<TutorialItemWhereUniqueInput>>;
  /** Update multiple TutorialItem component instances */
  update?: InputMaybe<Array<TutorialItemUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TutorialItem component instances */
  upsert?: InputMaybe<Array<TutorialItemUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TutorialItemUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<TutorialItemUpdateManyLocalizationsInput>;
  /** text input for default locale (en) */
  text?: InputMaybe<Scalars['String']['input']>;
};

export type TutorialItemUpdateManyLocalizationDataInput = {
  text?: InputMaybe<Scalars['String']['input']>;
};

export type TutorialItemUpdateManyLocalizationInput = {
  data: TutorialItemUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type TutorialItemUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<TutorialItemUpdateManyLocalizationInput>>;
};

export type TutorialItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TutorialItemUpdateManyInput;
  /** Document search */
  where: TutorialItemWhereInput;
};

export type TutorialItemUpdateOneInlineInput = {
  /** Create and connect one TutorialItem document */
  create?: InputMaybe<TutorialItemCreateInput>;
  /** Delete currently connected TutorialItem document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TutorialItem document */
  update?: InputMaybe<TutorialItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TutorialItem document */
  upsert?: InputMaybe<TutorialItemUpsertWithNestedWhereUniqueInput>;
};

export type TutorialItemUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TutorialItemUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TutorialItemWhereUniqueInput;
};

export type TutorialItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TutorialItemUpdateInput;
  /** Unique document search */
  where: TutorialItemWhereUniqueInput;
};

export type TutorialItemUpsertInput = {
  /** Create document if it didn't exist */
  create: TutorialItemCreateInput;
  /** Update document if it exists */
  update: TutorialItemUpdateInput;
};

export type TutorialItemUpsertLocalizationInput = {
  create: TutorialItemCreateLocalizationDataInput;
  locale: Locale;
  update: TutorialItemUpdateLocalizationDataInput;
};

export type TutorialItemUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TutorialItemUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TutorialItemWhereUniqueInput;
};

export type TutorialItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TutorialItemUpsertInput;
  /** Unique document search */
  where: TutorialItemWhereUniqueInput;
};

/** Identifies documents */
export type TutorialItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TutorialItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TutorialItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TutorialItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  text_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  text_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  text_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  text_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  text_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  text_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References TutorialItem record uniquely */
export type TutorialItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Identifies documents */
export type TutorialManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TutorialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TutorialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TutorialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  items_every?: InputMaybe<TutorialItemWhereInput>;
  items_none?: InputMaybe<TutorialItemWhereInput>;
  items_some?: InputMaybe<TutorialItemWhereInput>;
};

export enum TutorialOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TutorialParent = Pdp;

export type TutorialParentConnectInput = {
  Pdp?: InputMaybe<PdpConnectInput>;
};

export type TutorialParentCreateInput = {
  Pdp?: InputMaybe<PdpCreateInput>;
};

export type TutorialParentCreateManyInlineInput = {
  /** Connect multiple existing TutorialParent documents */
  connect?: InputMaybe<Array<TutorialParentWhereUniqueInput>>;
  /** Create and connect multiple existing TutorialParent documents */
  create?: InputMaybe<Array<TutorialParentCreateInput>>;
};

export type TutorialParentCreateOneInlineInput = {
  /** Connect one existing TutorialParent document */
  connect?: InputMaybe<TutorialParentWhereUniqueInput>;
  /** Create and connect one TutorialParent document */
  create?: InputMaybe<TutorialParentCreateInput>;
};

export type TutorialParentUpdateInput = {
  Pdp?: InputMaybe<PdpUpdateInput>;
};

export type TutorialParentUpdateManyInlineInput = {
  /** Connect multiple existing TutorialParent documents */
  connect?: InputMaybe<Array<TutorialParentConnectInput>>;
  /** Create and connect multiple TutorialParent documents */
  create?: InputMaybe<Array<TutorialParentCreateInput>>;
  /** Delete multiple TutorialParent documents */
  delete?: InputMaybe<Array<TutorialParentWhereUniqueInput>>;
  /** Disconnect multiple TutorialParent documents */
  disconnect?: InputMaybe<Array<TutorialParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TutorialParent documents */
  set?: InputMaybe<Array<TutorialParentWhereUniqueInput>>;
  /** Update multiple TutorialParent documents */
  update?: InputMaybe<Array<TutorialParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TutorialParent documents */
  upsert?: InputMaybe<Array<TutorialParentUpsertWithNestedWhereUniqueInput>>;
};

export type TutorialParentUpdateManyWithNestedWhereInput = {
  Pdp?: InputMaybe<PdpUpdateManyWithNestedWhereInput>;
};

export type TutorialParentUpdateOneInlineInput = {
  /** Connect existing TutorialParent document */
  connect?: InputMaybe<TutorialParentWhereUniqueInput>;
  /** Create and connect one TutorialParent document */
  create?: InputMaybe<TutorialParentCreateInput>;
  /** Delete currently connected TutorialParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected TutorialParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TutorialParent document */
  update?: InputMaybe<TutorialParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TutorialParent document */
  upsert?: InputMaybe<TutorialParentUpsertWithNestedWhereUniqueInput>;
};

export type TutorialParentUpdateWithNestedWhereUniqueInput = {
  Pdp?: InputMaybe<PdpUpdateWithNestedWhereUniqueInput>;
};

export type TutorialParentUpsertWithNestedWhereUniqueInput = {
  Pdp?: InputMaybe<PdpUpsertWithNestedWhereUniqueInput>;
};

export type TutorialParentWhereInput = {
  Pdp?: InputMaybe<PdpWhereInput>;
};

export type TutorialParentWhereUniqueInput = {
  Pdp?: InputMaybe<PdpWhereUniqueInput>;
};

export type TutorialUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  items?: InputMaybe<TutorialItemUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<TutorialUpdateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TutorialUpdateLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TutorialUpdateLocalizationInput = {
  data: TutorialUpdateLocalizationDataInput;
  locale: Locale;
};

export type TutorialUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<TutorialCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<TutorialUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<TutorialUpsertLocalizationInput>>;
};

export type TutorialUpdateManyInlineInput = {
  /** Create and connect multiple Tutorial component instances */
  create?: InputMaybe<Array<TutorialCreateWithPositionInput>>;
  /** Delete multiple Tutorial documents */
  delete?: InputMaybe<Array<TutorialWhereUniqueInput>>;
  /** Update multiple Tutorial component instances */
  update?: InputMaybe<Array<TutorialUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Tutorial component instances */
  upsert?: InputMaybe<Array<TutorialUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TutorialUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<TutorialUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TutorialUpdateManyLocalizationDataInput = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TutorialUpdateManyLocalizationInput = {
  data: TutorialUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type TutorialUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<TutorialUpdateManyLocalizationInput>>;
};

export type TutorialUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TutorialUpdateManyInput;
  /** Document search */
  where: TutorialWhereInput;
};

export type TutorialUpdateOneInlineInput = {
  /** Create and connect one Tutorial document */
  create?: InputMaybe<TutorialCreateInput>;
  /** Delete currently connected Tutorial document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Tutorial document */
  update?: InputMaybe<TutorialUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Tutorial document */
  upsert?: InputMaybe<TutorialUpsertWithNestedWhereUniqueInput>;
};

export type TutorialUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TutorialUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TutorialWhereUniqueInput;
};

export type TutorialUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TutorialUpdateInput;
  /** Unique document search */
  where: TutorialWhereUniqueInput;
};

export type TutorialUpsertInput = {
  /** Create document if it didn't exist */
  create: TutorialCreateInput;
  /** Update document if it exists */
  update: TutorialUpdateInput;
};

export type TutorialUpsertLocalizationInput = {
  create: TutorialCreateLocalizationDataInput;
  locale: Locale;
  update: TutorialUpdateLocalizationDataInput;
};

export type TutorialUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TutorialUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TutorialWhereUniqueInput;
};

export type TutorialUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TutorialUpsertInput;
  /** Unique document search */
  where: TutorialWhereUniqueInput;
};

/** Identifies documents */
export type TutorialWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TutorialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TutorialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TutorialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  items_every?: InputMaybe<TutorialItemWhereInput>;
  items_none?: InputMaybe<TutorialItemWhereInput>;
  items_some?: InputMaybe<TutorialItemWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Tutorial record uniquely */
export type TutorialWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Entity & Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum Variant {
  ImageLeft = 'imageLeft',
  ImageRight = 'imageRight'
}

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type NavigationQueryVariables = Exact<{ [key: string]: never; }>;


export type NavigationQuery = { __typename?: 'Query', navigation?: { __typename?: 'Navigation', page: Array<{ __typename: 'Page', slug?: string | null, title?: string | null } | { __typename: 'Pdp', slug?: string | null, title?: string | null }> } | null };

export type PageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  stage?: Stage;
  locale: Locale;
}>;


export type PageQuery = { __typename?: 'Query', page?: { __typename: 'Page', id: string, slug?: string | null, title?: string | null, description?: string | null, ogImage?: { __typename?: 'Asset', url: string } | null, components: Array<{ __typename: 'Editorial', id: string, image?: { __typename?: 'Asset', url: string } | null, components: Array<{ __typename: 'Card', id: string, cta?: string | null, title?: string | null, url?: string | null, image?: { __typename?: 'Asset', url: string } | null } | { __typename: 'Cta', id: string, chapeau?: string | null, cta?: string | null, description?: string | null, title?: string | null, url?: string | null } | { __typename?: 'ProductCard' }> } | { __typename: 'Hero', id: string, description?: string | null, title?: string | null, image?: { __typename?: 'Asset', url: string } | null } | { __typename: 'ProductHighlight', id: string, productFocus?: { __typename: 'ProductFocus', id: string, cta?: string | null, description?: string | null, productId?: string | null, title?: string | null, url?: string | null, image?: { __typename?: 'Asset', url: string } | null, product?: { __typename?: 'FederateThisSkincre_Product', description?: string | null, id: number, ingredients?: string | null, price?: number | null, name: string, shortDescription?: string | null, slug: string, stock?: number | null, images?: Array<{ __typename?: 'FederateThisSkincre_Image', alt?: string | null, url: string } | null> | null } | null } | null } | { __typename: 'Routine', id: string, chapeau?: string | null, cta?: string | null, description?: string | null, title?: string | null, url?: string | null, image?: { __typename?: 'Asset', url: string } | null }> } | null };

export type PdpQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  stage?: Stage;
}>;


export type PdpQuery = { __typename?: 'Query', pdp?: { __typename: 'Pdp', id: string, slug?: string | null, title?: string | null, description?: string | null, ogImage?: { __typename?: 'Asset', url: string } | null, components: Array<{ __typename: 'ProductList', title?: string | null, relatedProductList?: { __typename?: 'RelatedProductList', relatedProductId?: string | null, relatedProducts?: { __typename?: 'FederateThisSkincre_related', products?: Array<{ __typename?: 'FederateThisSkincre_Product', description?: string | null, id: number, ingredients?: string | null, name: string, price?: number | null, shortDescription?: string | null, slug: string, stock?: number | null, images?: Array<{ __typename?: 'FederateThisSkincre_Image', alt?: string | null, url: string } | null> | null }> | null } | null } | null } | { __typename: 'Routine', id: string, chapeau?: string | null, cta?: string | null, description?: string | null, title?: string | null, url?: string | null, image?: { __typename?: 'Asset', url: string } | null } | { __typename: 'Tutorial', id: string, title?: string | null, image?: { __typename?: 'Asset', url: string } | null, items: Array<{ __typename: 'TutorialItem', text?: string | null }> }>, commercetoolsProduct?: { __typename?: 'Commercetools_Product', id: string, masterData: { __typename?: 'Commercetools_ProductCatalogData', current?: { __typename?: 'Commercetools_ProductData', slug?: string | null, metaTitle?: string | null, metaDescription?: string | null, name?: string | null, description?: string | null, categories: Array<{ __typename?: 'Commercetools_Category', name?: string | null }>, allVariants: Array<{ __typename?: 'Commercetools_ProductVariant', id: number, sku?: string | null, attributesRaw: Array<{ __typename?: 'Commercetools_RawProductAttribute', name: string, value: any }>, images: Array<{ __typename?: 'Commercetools_Image', url: string, label?: string | null }>, price?: { __typename?: 'Commercetools_ProductPrice', value: { __typename?: 'Commercetools_HighPrecisionMoney', type: string, currencyCode: any, centAmount: any, fractionDigits: number } | { __typename?: 'Commercetools_Money', type: string, currencyCode: any, centAmount: any, fractionDigits: number } } | null }> } | null } } | null, reviews?: { __typename?: 'FederateThisReviews_Reviews', data?: Array<{ __typename?: 'FederateThisReviews_Review', comment?: string | null, id?: number | null, name?: string | null, product?: number | null, productSlug?: string | null, rating?: number | null } | null> | null } | null } | null };


export const NavigationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Navigation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"clwknjrk14u4807w4krsfrz0z","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pdp"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<NavigationQuery, NavigationQueryVariables>;
export const PageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Page"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Stage"}}},"defaultValue":{"kind":"EnumValue","value":"PUBLISHED"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locale"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locale"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"ogImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locale"}},{"kind":"EnumValue","value":"en"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Editorial"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locale"}},{"kind":"EnumValue","value":"en"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Card"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cta"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locale"}},{"kind":"EnumValue","value":"en"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cta"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"chapeau"}},{"kind":"Field","name":{"kind":"Name","value":"cta"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locale"}},{"kind":"EnumValue","value":"en"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductHighlight"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"productFocus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cta"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locale"}},{"kind":"EnumValue","value":"en"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"stock"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Routine"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"chapeau"}},{"kind":"Field","name":{"kind":"Name","value":"cta"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locales"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"locale"}},{"kind":"EnumValue","value":"en"}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PageQuery, PageQueryVariables>;
export const PdpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Pdp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Stage"}}},"defaultValue":{"kind":"EnumValue","value":"PUBLISHED"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pdp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"ogImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tutorial"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Routine"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chapeau"}},{"kind":"Field","name":{"kind":"Name","value":"cta"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"relatedProductList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"relatedProductId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ingredients"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"stock"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"commercetoolsProduct"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"masterData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"StringValue","value":"en-GB","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"metaTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"StringValue","value":"en-GB","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"StringValue","value":"en-GB","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"StringValue","value":"en-GB","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"StringValue","value":"en-GB","block":false}}]},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"StringValue","value":"en-GB","block":false}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"allVariants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributesRaw"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"currency"},"value":{"kind":"StringValue","value":"EUR","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"centAmount"}},{"kind":"Field","name":{"kind":"Name","value":"fractionDigits"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sku"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"product"}},{"kind":"Field","name":{"kind":"Name","value":"productSlug"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PdpQuery, PdpQueryVariables>;