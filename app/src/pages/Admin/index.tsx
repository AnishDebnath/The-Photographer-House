import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AdminLayout } from './AdminLayout';
import { AuthGuard } from './AuthGuard';
import { HomeManager } from './HomeManager';

export const AdminPortal: React.FC = () => {
  return (
    <AuthGuard>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/admin/home" replace />} />
          <Route path="/home" element={<HomeManager />} />
          {/* Add other admin routes here */}
        </Routes>
      </AdminLayout>
    </AuthGuard>
  );
};

export default AdminPortal;
