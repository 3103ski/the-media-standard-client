import sanityClient from 'sanityClient';

// •••••••••••••••••••••••••••••••••••••••••••••
// -> GROQ --> Graph-Relational-Object-Queries
// ---------------------------------------
//  A query language developed by Sanity for getting
//  data from Sanity healdless CMS projects.
// ---------------------------------------
// MORE INFO --> https://www.sanity.io/docs/how-queries-work
// •••••••••••••••••••••••••••••••••••••••••••••

//---------
// --> Tech
//---------
export function fetchTechnologies() {
	return sanityClient.fetch(
		`*[_type == 'techContent'][0]{
            title, 
            tech[]->{
                title, 
                icon,
                confidence,
                usage,
                description,
                link,
                tags[]->{
                    title
                }
            }
        }`
	);
}

//---------
// --> Projects
//---------

export function fetchProjects() {
	return sanityClient.fetch(
		`*[_type == 'workContent'][0]{
            title, 
            projects[]->{
                title,
                slug,
                client->{
                    company,
                    description,
                    logo{
                        asset-> {
                            url, 
                            _id
                        }
                    }
                },
                tags[]->{
                    title
                },
                year,
                summary,
                projectLink,
                category,
                mainImage{
                    asset-> {
                        url,
                        _id
                    }
                },
            }
        }`
	);
}

export function fetchTeam() {
	return sanityClient.fetch(
		`*[_type == 'teamSection'][0]{
            title, 
            teamMembers[]->{
                firstName, 
                lastName,
                title,
                bio,
                picture{
                    asset-> {
                        url,
                        _id
                    }
                },
            }
        }`
	);
}

// Get Specific Service Content
export function fetchProject(slug) {
	return sanityClient.fetch(
		`*[slug.current == $slug][0]{
            title,
            slug,
            client->{
                company,
                description,
                logo{
                    asset-> {
                        url, 
                        _id
                    }
                }
            },

            images[]->{
                thumbnail {
                    asset-> {
                        url,
                        _id
                    }
                },
                fullImage {
                    asset-> {
                        url,
                        _id
                    }
                }
            },
            tags[]->{
                title
            },
            year,
            description,
            projectLink,
            category,
            mainImage{
                asset-> {
                    url,
                    _id
                }
                
            },
        }`,
		{ slug }
	);
}

//---------
// --> General
//---------

export function fetchGeneralInfo() {
	return sanityClient.fetch(
		`*[_type == 'general'][0]{
            landingVideo,
            facebook,
            instagram,
            yelp,
        }`
	);
}
