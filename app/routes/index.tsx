import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";


export const loader = async () => {
  const photos = [
    {
        url: 'https://media.graphcms.com/gllsSE80SJqUfvIQi9k5',
        width: 2579,
        height: 3439
    },
    {
        url: 'https://media.graphcms.com/8jof0xAvRgiWkXhq9VOL',
        width: 5184,
        height: 3456
    },
    {
        url: 'https://media.graphcms.com/iYceUYu5QLymYluAAJz1',
        width: 1536,
        height: 2048
    },
    {
        url: 'https://media.graphcms.com/2xIzvAcHQNKaKQE4RKHh',
        width: 2048,
        height: 1365
    },
    {
        url: 'https://media.graphcms.com/h2U89XBCSxGlKjLI5xd9',
        width: 1365,
        height: 2048
    },
    {
        url: 'https://media.graphcms.com/4kyWGKwwQeujZRNaXFDA',
        width: 1365,
        height: 2048
    },
    {
        url: 'https://media.graphcms.com/EuTMpVXQsebIx5ax9uTQ',
        width: 1400,
        height: 2048
    },
    {
        url: 'https://media.graphcms.com/Dry0BWRTjmDmR779Hj7z',
        width: 1365,
        height: 2048
    },
    {
        url: 'https://media.graphcms.com/kyLCR2V5STao8sStRuYf',
        width: 2048,
        height: 1587
    },
    {
        url: 'https://media.graphcms.com/tP6jOkljREGmvvNgUnkA',
        width: 1365,
        height: 2048
    },
    {
        url: 'https://media.graphcms.com/0pdPmgu9RjmTRtCMEDme',
        width: 2048,
        height: 2048
    }
  ]
  return json(
   {photos}
  );
};


export default function Index() {
  const { photos } = useLoaderData()
  return (
      <div className="gap-4 columns-3">
        {photos.map( (photo: { url: string, width: number, height: number }) => (
          <img
            loading="lazy"
            key={photo.url}
            width={photo.width}
            height={photo.height}
            className="w-full mb-4"
            src={photo.url}
            alt={photo.url} />
        ))}
      </div>

  )
}