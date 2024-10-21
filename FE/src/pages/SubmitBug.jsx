import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import axios from '@/services/axiosInstance'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const SubmitBug = () => {
  const [bugTitle, setBugTitle] = useState("");
  const [repositoryName, setRepositoryName] = useState("");
  const [prLink, setPrLink] = useState("");
  const [issueId, setIssueId] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!bugTitle || !repositoryName || !prLink || !issueId || !description) {
      toast.error("Input Fields Empty");
      return;
    }

    setLoading(true);

    const data = {
      title: bugTitle,
      repository_name: repositoryName,
      pr_link: prLink,
      issue_id: issueId,
      description
    };

    try {
      const response = await axios.post("/bugs/create", data);
      if (response.status === 201) {
        toast.success("Bug Submitted Successfully");
      }
    } catch (err) {
      console.error(err);
      const message = err.response?.data?.message || 'Server Error';
      toast.error(message);
    }

    setLoading(false);

    setBugTitle("");
    setRepositoryName("");
    setPrLink("");
    setIssueId("");
    setDescription("");
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-[75vw] flex justify-between px-5">
        {/* Left Column */}
        <div className="w-[30vw] flex flex-col gap-5">
          <div className="grid items-center gap-1.5">
            <Label htmlFor="bugTitle">Bug Title</Label>
            <Input
              type="text"
              id="bugTitle"
              placeholder="Bug Title"
              value={bugTitle}
              onChange={(e) => setBugTitle(e.target.value)}
            />
          </div>
          <div className="grid items-center gap-1.5">
            <Label htmlFor="repositoryName">Repository Name</Label>
            <Input
              type="text"
              id="repositoryName"
              placeholder="Repository Name"
              value={repositoryName}
              onChange={(e) => setRepositoryName(e.target.value)}
            />
          </div>
          <div className="grid items-center gap-1.5">
            <Label htmlFor="prLink">PR Link</Label>
            <Input
              type="text"
              id="prLink"
              placeholder="PR Link"
              value={prLink}
              onChange={(e) => setPrLink(e.target.value)}
            />
          </div>
          <div className="grid items-center gap-1.5">
            <Label htmlFor="issueId">Issue ID</Label>
            <Input
              type="text"
              id="issueId"
              placeholder="Issue ID"
              value={issueId}
              onChange={(e) => setIssueId(e.target.value)}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-[30vw] flex flex-col gap-5">
          <div className="grid items-center gap-1.5">
            <Label htmlFor="description">Description</Label>
            <Textarea
              className="min-h-32 resize-none"
              id="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Button
            className="mb-5"
            disabled={loading}
            type="submit"
            onClick={handleSubmit}
          >
            {!loading ? "Submit" : "Submitting..."}
          </Button>
        </div>
      </div>
    </>
  );
};

export default SubmitBug;
