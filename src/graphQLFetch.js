import { message } from 'antd';

export default async function graphQLFetch(query, variables = {}) {
  try {
    const response = await fetch(window.ENV.UI_API_ENDPOINT, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });
    const body = await response.text();
    const result = JSON.parse(body);

    if (result.errors) {
      const error = result.errors[0];
      if (error.extensions.code === 'BAD_USER_INPUT') {
        message.error(`${error.message}`);
      } else {
        message.error(`${error.extensions.code}: ${error.message}`);
      }
    }
    return result.data;
  } catch (e) {
    message.error(`Error in sending data to server: ${e.message}`);
    return null;
  }
}
