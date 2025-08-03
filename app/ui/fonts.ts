// utilizamos next/font/google para importar fuentes desde google y que sean optimizadas por next
import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400','700'] });

