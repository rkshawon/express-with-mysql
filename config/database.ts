import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASS as string,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "mysql",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIERDCCAqygAwIBAgIUCvZgtOhiIIYJJNt3hmFJM7vRilQwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvMzkxMDkzNWUtMzk0Yi00ODYzLTljOTYtZjQzN2RmMjZi
Y2NhIFByb2plY3QgQ0EwHhcNMjYwMzAxMTczNTUyWhcNMzYwMjI3MTczNTUyWjA6
MTgwNgYDVQQDDC8zOTEwOTM1ZS0zOTRiLTQ4NjMtOWM5Ni1mNDM3ZGYyNmJjY2Eg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAKzD3+kk
FwVyP3s/MBiuxWhPI0GqqglIKzPTCzaMCMpA77urOTJdzXhhgBMVfL4vZKS+CIH9
ZfG1lvGRzKsUbG1Yv8y2Cmx/wfrD0HNP3TzE9zpBUbklYZDUMRHNqP5bf4wsTxxc
6/CgeUR/KukPo3rHBr/AFRBmKz0/bJD1qtsrmPBZwLcIC6kYOeHQ6DbXwyWCNWl2
aKjKiEX69zS8EIfDsnaxE/y6Slxt2Amo3xd5B8UW1nbLfTNFxk+HqkqLD9lQyx4x
wPRoMBMLbkbY9Ogs7J1webk1Obx2tCtCkMbX/MTeUG8lTjDXDxuJK4sN6GAu7NqR
ugNXWLz39FBNXovc3wKQhjMbxV11fM0oDpTT2UlbNqn4kK/Oggi2zr3xKRHaHZwY
LHa9dNQA7qLOWOpEGm8r18c8Ccva02xX1Gk7uxsCAb3mPyNYbSi67P316pm8x95H
3SV98OSW4GSZvALBA24KNBXCMKNzU352hCU/uUMH6kExLSd3DUr8jq3gLQIDAQAB
o0IwQDAdBgNVHQ4EFgQUS4Xymh4+q4oUZICvquh83yE0uNcwEgYDVR0TAQH/BAgw
BgEB/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAHtLsI4qxx76
/56YTqAoyCszKklk9Nfhg+MlolEkob5jYTiqPZPdHNzBQfCFcT7MzzrDs7kf70kT
8WlvkJVOS6DLh+YlVDLl1ahewBMsmbcA9Z4S+Sgc0qBTxxZ9Nog32xvohvOlwPD8
eykPOjLLNWnMUNRWuOpT/KyNvvhbqsfrFn2aD5e2DLYxstTVnxp4CSFzqP92l02j
sY+kMQ9OzjgCRqQzjY1yWTNrOJ1v8bkTbwJ5OG9Idzr5G3y2FODcEJphLzc1k7Sa
9668ueu96xLD2O0Fc9suIw+qcuo3aCg8svNIT3NZ8IsHLnVayt6vKBMEWaJ1SROo
Bv2PvCl14ZTdwWuOwdL0LkPBg87c5c5aU4J7UGDDb501kX1/PtigJhs1p09miSSJ
Zf7axmGKWnBhuuUrRwribaTGptgVWg4eW59NRIOQTdFUSfSMaGOvqAukM/oHGeAQ
dsJqkVqK5M92BdYujKWh+5At/0wsBe2i7jC5NdLrNLo81XVmGPyVxQ==
-----END CERTIFICATE-----`,
      },
    },
  },
);

export default sequelize;
