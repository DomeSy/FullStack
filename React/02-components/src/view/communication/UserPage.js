import React, { useContext } from 'react'
import { ThemeContext } from '../../Context';

export default function UserPage() {
  // useContext: Hook
  const ctx = useContext(ThemeContext);
  return (
    <div>
      <h3 className={ctx.themeColor}>UserPage</h3>
    </div>
  )
}
