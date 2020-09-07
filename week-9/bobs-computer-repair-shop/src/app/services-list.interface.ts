/*
============================================
; Title: services-list.interface.ts
; Author: Angel Padilla
; Date: 06 Sept 2020
; Modified By:
; Description: services interface
;===========================================
*/
export interface IServicesList {
  id: number;
  serviceName: string;
  price: number;
  checked: boolean;
}
