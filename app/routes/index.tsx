import Button from "~/components/Button"

export default function Index() {
  return (
    <>
      <Button text="Hello, world!" />
      <div class="gap-4 columns-3">
        <img class="w-full aspect-video mb-4" src="https://picsum.photos/500/300?random=1" />
        <img class="w-full aspect-square mb-4" src="https://picsum.photos/500/300?random=2" />
        <img class="w-full aspect-square mb-4" src="https://picsum.photos/500/300?random=3" />
        <img class="w-full aspect-square mb-4" src="https://picsum.photos/500/300?random=4" />
        <img class="w-full aspect-video mb-4" src="https://picsum.photos/500/300?random=5" />
        <img class="w-full aspect-video mb-4" src="https://picsum.photos/500/300?random=6" />
        <img class="w-full aspect-square mb-4" src="https://picsum.photos/500/300?random=7" />
        <img class="w-full aspect-video mb-4" src="https://picsum.photos/500/300?random=8" />
        <img class="w-full aspect-square mb-4" src="https://picsum.photos/500/300?random=9" />
      </div>
    </>
  )
}