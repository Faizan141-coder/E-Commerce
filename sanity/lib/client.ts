import { createClient } from "next-sanity"
import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token: "skozx10kz9tMi0LGmvwkjx86p3A54Hvc4aSGHsVHb46QZncPTaTk4XQlWohQyPUhckVCjuIDbIT4JaoBxomG7e9fc39BQT1NXXwIN2mvIcpmpVfdf4hiy0lCeKLjwLbAT5ikVv0kQCOlqZoYRpzu1BGfRMOIb7i5NGTAsSFwbg4CUP5DcmDQ",
})
