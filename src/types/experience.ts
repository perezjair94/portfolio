interface ICompany {
  name: string;
  url: string;
}

interface IJobTitleProps {
  name: string;
  startDate: string;
  finsihDate: string;
}

interface IExperience {
  company: ICompany;
  location: string;
  jobTitle: IJobTitleProps;
  description: string;
}
