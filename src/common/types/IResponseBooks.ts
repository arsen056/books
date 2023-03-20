export interface IResponseBooks {
  kind: string;
  totalItems: number;
  items: Items[];
}

export interface Items {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: IVolumeInfo;
  saleInfo: ISaleInfo;
  accessInfo: IAccessInfo;
  searchInfo: { textSnippet: string };
}

export interface IVolumeInfo {
  title: string;
  authors: string[];
  publishedDate: string;
  industryIdentifiers: IndustryIdentifiers[];
  readingModes: {
    text: boolean;
    image: boolean;
  };
  printType: string;
  categories: string[];
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

export interface ISaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
}

export interface IAccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: { isAvailable: boolean };
  pdf: { isAvailable: boolean };
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}

export interface IndustryIdentifiers {
  type: string;
  identifier: string;
}