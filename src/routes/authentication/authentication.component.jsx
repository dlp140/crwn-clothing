import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form copy/sign-in-form.component'

import FormInput from '../../components/form-input/form-input.component'

const Authentication = () => {
  // useEffect(() => {
  //   ;(async () => {
  //     const response = await getRedirectResult(auth)

  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user)
  //     }
  //   })()
  // }, [])

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect()
  //   console.log(user)
  // }

  return (
    <div>
      <h1>Sign In Page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication
