import { Button } from 'antd';
import React, { useEffect } from 'react';
import { get } from '../../utils';

export default function Index() {
  console.log('import.meta.env', import.meta.env)

  useEffect(() => {
    get('/index-infos').then(() => {

    })
  }, [])

  return <div>
    Index
    <Button type="primary">Index</Button>
    </div>
}