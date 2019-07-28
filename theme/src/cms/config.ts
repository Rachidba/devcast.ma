export default {"backend":{"name":"git-gateway","branch":"master"},"media_folder":"static/img","public_folder":"/img","collections":[{"name":"pages","label":"Pages","files":[{"file":"src/cms/landing.md","label":"Landing Page","name":"landing","fields":[{"label":"Template Key","name":"templateKey","widget":"hidden","default":"index-page"},{"label":"Heading","name":"heading","hint":"Heading for the Banner","widget":"string","required":false},{"label":"Subheading","name":"subheading","hint":"Subheading for the Banner and Footer","widget":"string","required":false},{"label":"Logo","name":"logo","widget":"image","hint":"Logo to replace the one from Anchor","required":false},{"label":"Cover","name":"cover","widget":"image","hint":"Image to render in the Banner","required":false},{"label":"Podcast Links","name":"podcastLinks","hint":"Set of links that will appear in the Banner from different services","widget":"list","field":{"label":"Url","name":"url","widget":"string","pattern":["^(?:http(s)?://)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$","Url must be valid"]}},{"label":"Social Links","name":"socialLinks","widget":"list","required":false,"field":{"label":"Url","name":"url","widget":"string","pattern":["^(?:http(s)?://)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$","Url must be valid"]}}]},{"file":"src/cms/about.md","label":"About","name":"about","fields":[{"label":"Template Key","name":"templateKey","widget":"hidden","default":"about-page"},{"label":"Title","name":"title","widget":"string"},{"label":"Body","name":"body","widget":"markdown"},{"label":"Authors","name":"authors","widget":"list","fields":[{"label":"Name","name":"name","widget":"string"},{"label":"Description","name":"description","widget":"string"},{"label":"Picture","name":"picture","widget":"image"}]}]}]}]}