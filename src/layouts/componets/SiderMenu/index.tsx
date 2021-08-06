import React from 'react';
import { Menu } from 'antd';
import { CodeOutlined } from '@ant-design/icons';
import styles from './index.less';

const MenuItem = Menu.Item;
const MenuDivider = Menu.Divider;

export interface SiderMenuProps {
  onSelectItem: (vals: any) => void;
}

const MenuList: any[] = [
  {
    label: '脚本',
    id: 1,
    name: 'duya-cli',
    path: '/duya-cli/',
    icon: <CodeOutlined />,
  },
];

export default (props: SiderMenuProps) => {
  const { onSelectItem } = props;
  return (
    <div className={styles.siderMenu}>
      <Menu
        onClick={(value: any) => {
          console.log('value', value?.key);
          const selectItem = MenuList.filter(
            (el: any) => el.id == value.key,
          )[0];
          console.log('selectItem', selectItem);
          onSelectItem(selectItem);
        }}
        theme="dark"
        inlineCollapsed
        style={{ width: '56px' }}
      >
        {MenuList.map((menuNode: any) => (
          <MenuItem key={menuNode.id} icon={menuNode.icon}>
            {menuNode.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
