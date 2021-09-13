// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
	let { name, organisation, emailId, messsage } = req.body
	const response = await fetch(process.env.GRAPHCMS_PROJECT_API, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.GRAPHCMD_MUT_DATA_TOKEN}`,
		},
		body: JSON.stringify({
			query : `mutation {
        createContact(data : {name : "${name}" , emailId : "${emailId}" , organisation : "${organisation}" , message : "${messsage}"}){
          id
          name
          emailId
          message
        }
      }`,
			variables : {},
		}),
	})

  let data = await response.json()

  console.log(data);

  res.json(data)
}
