export const data = [
  {
    id: "client_id",

    type: "text",

    name: "client_id",

    stream: ["Youtube", "LinkedIn"],

    header: "credentials",

    label: "Client ID",

    required: true,

    initialValue: "",

    placeholder: "78bm0l1d3681mu",
  },

  {
    id: "client_secret",

    type: "text",

    name: "client_secret",

    stream: ["Youtube", "LinkedIn"],

    header: "credentials",

    label: "Client Secret",

    required: true,

    initialValue: "",

    placeholder: "oXYkavz8hP9DNBUK",
  },

  {
    id: "redirect_uri",

    type: "url",

    name: "redirect_uri",

    stream: ["Youtube", "LinkedIn"],

    header: "credentials",

    label: "Redirect URI",

    required: true,

    initialValue: "",

    placeholder: "https://www.linkedin.com/developers/tools/oauth/redirect",
  },

  {
    id: "token_url",

    type: "url",

    name: "token_url",

    stream: ["Youtube", "LinkedIn"],

    header: "credentials",

    label: "Token URL",

    required: true,

    initialValue: "",

    placeholder: "https://www.linkedin.com/oauth/v2/accessToken",
  },

  {
    id: "base_url",

    type: "url",

    name: "base_url",

    stream: ["Youtube", "LinkedIn"],

    header: "credentials",

    label: "Base URL",

    required: true,

    initialValue: "",

    placeholder: "https://api.linkedin.com/v2/",
  },

  {
    id: "authorization_url",

    type: "url",

    name: "authorization_url",

    stream: ["Youtube", "LinkedIn"],

    header: "credentials",

    label: "Authorization URL",

    required: true,

    initialValue: "",

    placeholder: "https://api.linkedin.com/v2/",
  },

  {
    id: "access_token",

    type: "text",

    name: "access_token",

    stream: ["Youtube", "LinkedIn"],

    header: "credentials",

    label: "Access Token",

    required: true,

    initialValue: "",

    placeholder: "78bm0l1d3681mu",
  },

  {
    id: "organization_URN",

    type: "text",

    name: "organization_URN",

    stream: ["Youtube", "LinkedIn"],

    header: "parameters",

    label: "Organization URN",

    required: true,

    initialValue: "",

    placeholder: "urn:li:organization:2414183",
  },

  {
    id: "organization_id",

    type: "text",

    name: "organization_id",

    stream: ["Youtube", "LinkedIn"],

    header: "parameters",

    label: "Organization ID",

    required: true,

    initialValue: "",

    placeholder: "2414183",
  },

  {
    id: "start_time",

    type: "date",

    name: "start_time",

    stream: ["Youtube", "LinkedIn"],

    header: "parameters",

    label: "Start Time",

    required: true,

    initialValue: "",

    placeholder: "",
  },

  {
    id: "end_time",

    type: "date",

    name: "end_time",

    stream: ["Youtube", "LinkedIn"],

    header: "parameters",

    label: "End Time",

    required: true,

    initialValue: "",

    placeholder: "",
  },

  {
    id: "headers",

    type: "text",

    name: "headers",

    stream: ["Youtube", "LinkedIn"],

    header: "parameters",

    label: " Headers",

    required: true,

    initialValue: "",

    placeholder: "",
  },

  {
    id: "data",

    type: "text",

    name: "data",

    stream: ["Youtube", "LinkedIn"],

    header: "parameters",

    label: "Data",

    required: true,

    initialValue: "",

    placeholder: "",
  },

  {
    id: "LifeTime",

    type: "select",

    name: "life_time",

    stream: ["Youtube", "LinkedIn"],

    header: "Endpoint",

    label: "LifeTime",

    required: true,

    initialValue: "",

    placeholder: "",
  },

  {
    id: "TimeBound",

    type: "select",

    name: "time_bound",

    stream: ["Youtube", "LinkedIn"],

    header: "Endpoint",

    label: "TimeBound",

    required: true,

    initialValue: "",

    placeholder: "",
  },

  {
    id: "output_json_filepath",

    type: "text",

    name: "output_json_filepath",

    stream: ["LinkedIn"],

    header: "path",

    label: "Output JSON Filepath",

    required: true,

    initialValue: "",

    placeholder: "s3://",
  },
];

export const endpoint = [
  {
    label: "personal_profile",

    value: "test",

    stream: "LinkedIn",

    type: "LifeTime",
  },

  {
    label: "memb_org_access_ctrl",

    value: "organizationAcls?q=roleAssignee",

    stream: "LinkedIn",

    type: "LifeTime",
  },

  {
    label: "find_org_admin",

    value:
      "organizationAcls?q=organization&organization={organization_URN}&role=ADMINISTRATOR&state=APPROVED",

    stream: "LinkedIn",

    type: "LifeTime",
  },

  {
    label: "find_org_access_ctrl",

    value: "organizationAcls?q=organization&organization={organization_URN}",

    stream: "LinkedIn",

    type: "LifeTime",
  },

  {
    label: "org_details",

    value: "organizations/{organization_id}",

    stream: "LinkedIn",

    type: "LifeTime",
  },

  {
    label: "lifetime_follow_stat",

    value:
      "organizationalEntityFollowerStatistics?q=organizationalEntity&organizationalEntity={organization_URN}",

    stream: "LinkedIn",

    type: "LifeTime",
  },
  {
    label: "timebound_follow_stat",

    value:
      "organizationalEntityFollowerStatistics?q=organizationalEntity&organizationalEntity={organization_URN}&timeIntervals.timeGranularityType=DAY&timeIntervals.timeRange.start={start_time}&timeIntervals.timeRange.end={end_time}",

    stream: "LinkedIn",

    type: "TimeBound",
  },
  {
    label: "lifetime_org_page_stat",

    value:
      "organizationPageStatistics?q=organization&organization={organization_URN}",

    stream: "LinkedIn",

    type: "LifeTime",
  },
  {
    label: "timebound_org_page_stat",

    value:
      "organizationPageStatistics?q=organization&organization={organization_URN}&timeIntervals.timeGranularityType=DAY&timeIntervals.timeRange.start={start_time}&timeIntervals.timeRange.end={end_time}",

    stream: "LinkedIn",

    type: "TimeBound",
  },
  {
    label: "lifetime_share_stat",

    value:
      "organizationalEntityShareStatistics?q=organizationalEntity&organizationalEntity={organization_URN}",

    stream: "LinkedIn",

    type: "LifeTime",
  },
  {
    label: "timebound_share_stat",

    value:
      "organizationalEntityShareStatistics?q=organizationalEntity&organizationalEntity={organization_URN}&timeIntervals.timeGranularityType=DAY&timeIntervals.timeRange.start={start_time}&timeIntervals.timeRange.end={end_time}",

    stream: "LinkedIn",

    type: "TimeBound",
  },
  {
    label: "networksize",

    value: "networkSizes/{organization_URN}?edgeType=CompanyFollowedByMember",

    stream: "LinkedIn",

    type: "LifeTime",
  },
  {
    label: "share_id",

    value:
      "shares?q=owners&owners={organization_URN}&sortBy=LAST_MODIFIED&sharesPerOwner=100",

    stream: "LinkedIn",

    type: "LifeTime",
  },
  {
    label: "retrieve_social_actions",

    value: "socialActions/{commentUrn}",

    stream: "LinkedIn",

    type: "LifeTime",
  },
  {
    label: "retrieve_like_on_shares",

    value: "socialActions/{commentUrn}/likes",

    stream: "LinkedIn",

    type: "LifeTime",
  },
  {
    label: "retrieve_comments_on_shares",

    value: "socialActions/{commentUrn}/comments",

    stream: "LinkedIn",

    type: "LifeTime",
  },
  {
    label: "retrieve_comments_on_comments",

    value: "socialActions/{commentUrn}/comments/{commentId}",

    stream: "LinkedIn",

    type: "LifeTime",
  },
  {
    label: "reaction",

    value: "socialMetadata/{commentUrn}",

    stream: "LinkedIn",

    type: "LifeTime",
  },
  {
    label: "personal_profile",

    value: "test",

    stream: "Youtube",

    type: "LifeTime",
  },
];

export const stream = [
  {
    id: 1,

    name: "LinkedIn",
  },

  {
    id: 2,

    name: "YouTube",
  },
  {
    id: 3,

    name: "Facebook",
  },
  {
    id: 4,

    name: "Zoho",
  },
  {
    id: 5,

    name: "twitter",
  },
];
