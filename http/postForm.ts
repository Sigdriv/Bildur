import { resToTkError } from './TkError';

type Params = {
  url: string;
  body: FormData;
  orgNr?: string;
};

export async function postForm<T, ErrorData = undefined>({
  url,
  body,
  orgNr = '',
}: Params): Promise<T & { message: string }> {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'X-Selected-Org': orgNr,
    },
    body,
  });

  if (!res.ok) {
    throw await resToTkError<ErrorData>(res);
  }

  const result = (await res.json()) as T & { message: string };

  return result;
}
