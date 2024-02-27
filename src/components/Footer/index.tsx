import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
const Footer: React.FC = () => {
  const defaultMessage = '小成出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/chengAron',
          blankTarget: true,
        },
        {
          title: <>备案号 蜀ICP备2024053935号-1</>,
          href: 'https://beian.miit.gov.cn/',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
