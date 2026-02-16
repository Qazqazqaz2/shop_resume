import React from 'react';

export const AdobeIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#FF0000"/>
    <path d="M100 100L200 200L300 100H100Z" fill="white"/>
    <path d="M150 150L200 200L250 150H150Z" fill="#FF0000"/>
    <text x="200" y="250" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">ADOBE</text>
  </svg>
);

export const OfficeIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#0078D4"/>
    <rect x="50" y="50" width="100" height="120" fill="white" rx="5"/>
    <rect x="50" y="50" width="100" height="20" fill="#0078D4"/>
    <line x1="60" y1="80" x2="140" y2="80" stroke="#0078D4" strokeWidth="2"/>
    <line x1="60" y1="100" x2="140" y2="100" stroke="#0078D4" strokeWidth="2"/>
    <line x1="60" y1="120" x2="120" y2="120" stroke="#0078D4" strokeWidth="2"/>
    <rect x="170" y="50" width="100" height="120" fill="white" rx="5"/>
    <rect x="170" y="50" width="100" height="20" fill="#0078D4"/>
    <rect x="180" y="80" width="80" height="60" fill="#0078D4" opacity="0.2"/>
    <rect x="290" y="50" width="60" height="120" fill="white" rx="5"/>
    <rect x="290" y="50" width="60" height="20" fill="#0078D4"/>
    <circle cx="320" cy="100" r="15" fill="#0078D4"/>
    <text x="200" y="250" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">OFFICE 365</text>
  </svg>
);

export const IntelliJIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#000000"/>
    <path d="M100 80L200 50L300 80L280 200L200 230L120 200L100 80Z" fill="#FF6B6B"/>
    <circle cx="200" cy="140" r="30" fill="white"/>
    <path d="M185 140L200 125L215 140L200 155L185 140Z" fill="#000000"/>
    <text x="200" y="260" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">INTELLIJ IDEA</text>
  </svg>
);

export const FigmaIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#0ACF83"/>
    <circle cx="150" cy="100" r="40" fill="white"/>
    <circle cx="150" cy="200" r="40" fill="white" opacity="0.6"/>
    <circle cx="250" cy="100" r="40" fill="white" opacity="0.4"/>
    <circle cx="250" cy="200" r="40" fill="white" opacity="0.2"/>
    <rect x="200" y="150" width="40" height="40" fill="white"/>
    <text x="200" y="260" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">FIGMA</text>
  </svg>
);

export const AutoCADIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#E51937"/>
    <rect x="50" y="50" width="300" height="200" fill="white" rx="10"/>
    <path d="M100 100L150 150L200 100L250 150L300 100" stroke="#E51937" strokeWidth="8" fill="none" strokeLinecap="round"/>
    <circle cx="150" cy="150" r="20" fill="#E51937"/>
    <circle cx="250" cy="150" r="20" fill="#E51937"/>
    <text x="200" y="250" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">AUTOCAD</text>
  </svg>
);

export const VSCodeIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#007ACC"/>
    <path d="M80 80L150 150L80 220L100 200L150 150L100 100L80 80Z" fill="white"/>
    <path d="M150 150L250 80L270 100L200 150L270 200L250 220L150 150Z" fill="white" opacity="0.7"/>
    <text x="200" y="260" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">VS CODE</text>
  </svg>
);

export const OracleIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#F80000"/>
    <ellipse cx="200" cy="120" rx="80" ry="50" fill="white"/>
    <ellipse cx="200" cy="120" rx="60" ry="35" fill="#F80000"/>
    <rect x="150" y="180" width="100" height="40" fill="white" rx="5"/>
    <text x="200" y="205" textAnchor="middle" fill="#F80000" fontSize="16" fontWeight="bold">ORACLE</text>
    <text x="200" y="260" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">DATABASE</text>
  </svg>
);

export const SQLServerIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#CC2927"/>
    <rect x="100" y="50" width="200" height="200" fill="white" rx="10"/>
    <rect x="120" y="80" width="160" height="20" fill="#CC2927"/>
    <rect x="120" y="120" width="160" height="15" fill="#CC2927" opacity="0.7"/>
    <rect x="120" y="150" width="120" height="15" fill="#CC2927" opacity="0.5"/>
    <circle cx="200" cy="200" r="30" fill="#CC2927"/>
    <text x="200" y="260" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">SQL SERVER</text>
  </svg>
);

export const PostgreSQLIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#336791"/>
    <path d="M150 80L200 50L250 80L230 180L200 200L170 180L150 80Z" fill="white"/>
    <circle cx="200" cy="130" r="25" fill="#336791"/>
    <path d="M180 130L200 120L220 130L200 140L180 130Z" fill="white"/>
    <text x="200" y="250" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">POSTGRESQL</text>
  </svg>
);

export const MongoDBIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#47A248"/>
    <ellipse cx="200" cy="100" rx="60" ry="80" fill="white"/>
    <ellipse cx="200" cy="100" rx="40" ry="60" fill="#47A248"/>
    <ellipse cx="200" cy="200" rx="60" ry="80" fill="white"/>
    <ellipse cx="200" cy="200" rx="40" ry="60" fill="#47A248"/>
    <text x="200" y="260" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">MONGODB</text>
  </svg>
);

export const RedisIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#DC382D"/>
    <circle cx="200" cy="100" r="50" fill="white"/>
    <circle cx="200" cy="100" r="35" fill="#DC382D"/>
    <rect x="150" y="170" width="100" height="50" fill="white" rx="5"/>
    <rect x="160" y="180" width="80" height="8" fill="#DC382D"/>
    <rect x="160" y="195" width="60" height="8" fill="#DC382D"/>
    <rect x="160" y="210" width="70" height="8" fill="#DC382D"/>
    <text x="200" y="250" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">REDIS</text>
  </svg>
);

export const MySQLIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#00758F"/>
    <path d="M100 80L200 50L300 80L280 200L200 230L120 200L100 80Z" fill="white"/>
    <path d="M150 120L200 100L250 120L230 180L200 190L170 180L150 120Z" fill="#00758F"/>
    <text x="200" y="260" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">MYSQL</text>
  </svg>
);

export const getProductIcon = (productId) => {
  const icons = {
    1: AdobeIcon,
    2: OfficeIcon,
    3: IntelliJIcon,
    4: FigmaIcon,
    5: AutoCADIcon,
    6: VSCodeIcon,
    7: OracleIcon,
    8: SQLServerIcon,
    9: PostgreSQLIcon,
    10: MongoDBIcon,
    11: RedisIcon,
    12: MySQLIcon,
  };
  return icons[productId] || null;
};

