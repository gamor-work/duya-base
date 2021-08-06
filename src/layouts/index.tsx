import React, { useState } from 'react';
import { MicroApp } from 'umi';
import SiderMenu from './componets/SiderMenu';
import styles from './index.less';

export default ({ children }: { children: React.ReactNode }) => {
  const [activeMcro, setActiveMcro] = useState<any>(null);

  const onSelectItem = (vals: any) => {
    setActiveMcro(vals.name);
  };

  return (
    <section className={styles.container}>
      <SiderMenu onSelectItem={onSelectItem} />
      <div id="duya-qiankun" className={styles.content}>
        {activeMcro ? <MicroApp name={activeMcro} /> : null}
      </div>
    </section>
  );
};
