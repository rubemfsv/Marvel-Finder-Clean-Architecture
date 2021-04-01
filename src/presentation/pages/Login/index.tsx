import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Styles from './styles.scss';

type LoginProps = {};

const Login: React.FC<LoginProps> = ({}: LoginProps) => {
  const history = useHistory();
  const [state, setState] = useState({
    isLoading: false,
    isFormInvalid: true,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: '',
  });

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {};

  return (
    <div className={Styles.login}>
      <div className={Styles.content}>HOME</div>
    </div>
  );
};

export default Login;
