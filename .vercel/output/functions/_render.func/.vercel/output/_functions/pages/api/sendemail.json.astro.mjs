import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend("re_GhJVTLvb_8SLGNVtMpctaGQ7v2a2nVKZt");
const POST = async ({ params, request }) => {
  const body = await request.json();
  const { to, from, html, subject } = body;
  if (!to || !from || !html || !subject) {
    return new Response(null, {
      status: 404,
      statusText: "Did not provide the right data"
    });
  }
  const send = await resend.emails.send({
    from,
    to,
    subject,
    html
  });
  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data
      }),
      {
        status: 200,
        statusText: "OK"
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: send.error
      }),
      {
        status: 500,
        statusText: "Server internal error"
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
