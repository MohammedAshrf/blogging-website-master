interface DashboardLink {
  name: string;
  route: string;
}

const dashboardLinks: DashboardLink[] = [
  {
    name: 'Posts',
    route: '/dashbaord',
  },
  {
    name: 'Create Post',
    route: '/create-post',
  },
  {
    name: 'View Blog',
    route: '/view-blog',
  },
];

export default dashboardLinks;
