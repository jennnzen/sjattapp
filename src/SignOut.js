import React from 'react';

import {auth} from "./App";


export default function SignOut() {
  return auth.currentUser && (
      <>
        <button onClick={() => auth.signOut()}>
            Sign Out
        </button>
        <p>Try to write "space"</p>
      </>
  )
}
