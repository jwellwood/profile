interface ITopData {
  eng: IRoleCity;
  esp: IRoleCity;
}

interface IRoleCity {
  role: string;
  city: string;
}

export const top_data: ITopData = {
  eng: {
    role: 'web developer',
    city: 'Madrid, Spain',
  },
  esp: {
    role: 'desarrollador web',
    city: 'Madrid, España',
  },
};
