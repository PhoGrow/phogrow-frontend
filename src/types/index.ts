export interface Info {
  title: string;
  subtitle?: string;
  message: string;
}

export interface ILandingPageText extends Info {
  buttons: {
    message: string;
    href?: string;
  }[];
}

export interface IInformation extends Info {
  image?: string;
  animation?: string;
}

export interface IPartner {
  logo: string;
  name: string;
  link: string;
}

export interface IRedirect {
  title?: string;
  text?: string;
  hashtag?: string;
  linkTo: string;
}

export interface Member {
  image: string;
  name: string;
  task: string;
  message: string;
}

export interface ITeam {
  workArea: string;
  developers: Member[];
}

export interface IMilestone {
  year: number;
  items: {
    marker: string;
    quarter: string;
    title: string;
    description: string;
  }[];
}

export interface IBlogEntry {
  image: string;
  categories: string[];
  title: string;
  date: string;
  author: string;
  tldr: string;
  text: string;
}

export interface IJobPosting {
  jobTitle: string;
  employmentType: string[];
  location: string[];
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}
