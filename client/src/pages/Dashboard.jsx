import  { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dashboard() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const result = await axios('/api/posts'); // Đường dẫn API để lấy dữ liệu bài viết
            setPosts(result.data);
        };
        fetchPosts();
    }, []);

    // Tính toán số lượng bài viết theo người dùng
    const userPosts = posts.reduce((acc, post) => {
        acc[post.author] = (acc[post.author] || 0) + 1;
        return acc;
    }, {});

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-auto">
                            <h2 className="text-2xl font-semibold leading-tight text-gray-800">Posts by User</h2>
                            <table className="min-w-full mt-6 table-auto">
                                <thead>
                                    <tr className="border-b">
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            User
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Number of Posts
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(userPosts).map(([user, count]) => (
                                        <tr key={user} className="border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{count}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
